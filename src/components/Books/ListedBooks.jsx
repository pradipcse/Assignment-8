import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListedBooks = () => {
    const [books, setBooks] = useState({ readBooks: [], wishListBooks: [] });
    const [activeTab, setActiveTab] = useState("readBooks"); // Default to "readBooks"
    const [filter, setFilter] = useState("Rating"); // Default sort by Rating
    const navigate = useNavigate();

    // Fetch books from local storage
    useEffect(() => {
        const readBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
        const wishListBooks = JSON.parse(localStorage.getItem("wishListBooks")) || [];
        console.log("Fetched Read Books:", readBooks); // Debugging log
        console.log("Fetched Wish List Books:", wishListBooks); // Debugging log
        setBooks({ readBooks, wishListBooks });
    }, []);

    // Sort books based on the selected filter
    const sortBooks = (booksList) => {
        return [...booksList].sort((a, b) => {
            if (filter === "Rating") return b.rating - a.rating;
            if (filter === "Number of pages") return b.totalPages - a.totalPages;
            if (filter === "Published year") return b.yearOfPublishing - a.yearOfPublishing;
            return 0;
        });
    };

    const activeBooks = activeTab === "readBooks" ? books.readBooks : books.wishListBooks;
    const sortedBooks = sortBooks(activeBooks);

    return (
        <div className="flex flex-col h-screen">
            {/* Header Section */}
            <div className="bg-white shadow-md p-10">
                <h1 className="text-2xl font-bold">Listed Books</h1>
                <p className="mb-4 text-gray-600">Select a category to view books:</p>

                {/* Tabs */}
                <div className="flex gap-4 mb-4">
                    <button
                        className={`px-4 py-2 ${activeTab === "readBooks"
                            ? "text-green-500 font-bold border border-green-500 rounded-xl"
                            : "text-blue-500 hover:underline"
                        }`}
                        onClick={() => setActiveTab("readBooks")}
                    >
                        Read Books
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === "wishListBooks"
                            ? "text-green-500 font-bold border border-green-500 rounded-xl"
                            : "text-blue-500 hover:underline"
                        }`}
                        onClick={() => setActiveTab("wishListBooks")}
                    >
                        Wish List Books
                    </button>
                </div>

                {/* Sort Dropdown */}
                <div className="mb-4">
                    <label htmlFor="sort" className="text-gray-600 mr-2 font-bold">
                        Sort by:
                    </label>
                    <select
                        id="sort"
                        className="p-2 border rounded-md"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="Rating">Rating</option>
                        <option value="Number of pages">Number of pages</option>
                        <option value="Published year">Published year</option>
                    </select>
                </div>
            </div>

            {/* Books List Section */}
            <div className="flex-grow overflow-y-auto p-6 bg-gray-100">
                <div className="grid grid-cols-1 gap-6">
                    {sortedBooks.length > 0 ? (
                        sortedBooks.map((book, index) => (
                            <div key={index} className="bg-white shadow-md rounded-md p-4 flex flex-col lg:flex-row gap-6">
                                {/* Book Image */}
                                <div className="w-full lg:w-1/3 flex justify-center">
                                    <img
                                        src={book.image || "https://via.placeholder.com/150"}
                                        alt={book.bookName}
                                        className="h-40 w-3/4 object-contain rounded-md mb-4 lg:mb-0 p-4"
                                    />
                                </div>

                                {/* Book Details */}
                                <div className="w-full lg:w-2/3">
                                    <h2 className="text-lg font-bold mb-2">{book.bookName}</h2>
                                    <p className="text-gray-600 mb-2">by: {book.author}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <p className="text-gray-600 mb-2">Tags: {book.tags?.join(", ")}</p>
                                        <p className="text-gray-600 mb-2">Year: {book.yearOfPublishing}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <p className="text-gray-600 mb-2">Publisher: {book.publisher}</p>
                                        <p className="text-gray-600 mb-2">Pages: {book.totalPages}</p>
                                    </div>
                                    <hr />
                                    <div className="flex gap-3 flex-wrap">
                                        <p className="text-gray-600 mb-2">Category: {book.category}</p>
                                        <p className="text-gray-600 mb-4">Rating: {book.rating}/5</p>
                                        <button
                                            onClick={() => navigate(`/bookDetails/${book.id}`)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">
                            {activeTab === "readBooks"
                                ? "No books available in Read Books."
                                : "No books available in Wish List."}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
