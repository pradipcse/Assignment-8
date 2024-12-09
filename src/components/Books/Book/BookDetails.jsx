import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const id = parseInt(bookId);

    const book = books.find((book) => book.bookId === id);

    const readHandle = () => {
        const readBooks = JSON.parse(localStorage.getItem("readBooks")) || [];
        const wishListBooks = JSON.parse(localStorage.getItem("wishListBooks")) || [];

        if (wishListBooks.some((b) => b.bookId === book.bookId)) {
            toast.error("This book is already in the Wishlist!");
            return;
        }
        if (readBooks.some((b) => b.bookId === book.bookId)) {
            toast.error("This book is already marked as Read!");
            return;
        }

        readBooks.push(book);
        localStorage.setItem("readBooks", JSON.stringify(readBooks));
        toast.success("Book added to the read list");
    };

    const wishListHandle = () => {
        const wishListBooks = JSON.parse(localStorage.getItem("wishListBooks")) || [];
        const readBooks = JSON.parse(localStorage.getItem("readBooks")) || [];

        if (readBooks.some((b) => b.bookId === book.bookId)) {
            toast.error("This book is already marked as Read!");
            return;
        }

        if (wishListBooks.some((b) => b.bookId === book.bookId)) {
            toast.error("This book is already in the Wishlist!");
            return;
        }

        wishListBooks.push(book);
        localStorage.setItem("wishListBooks", JSON.stringify(wishListBooks));
        toast.success("Book added to the wishlist");
    };

    return (
        <div className="p-5 flex flex-col gap-6 items-center lg:items-start lg:flex-row">
            {/* Book Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="rounded-md shadow-lg object-contain w-full max-w-sm lg:max-w-full"
                />
            </div>

            {/* Book Details */}
            <div className="w-full lg:w-2/3">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{book.bookName}</h1>
                <p className="text-gray-600 text-lg mt-2">
                    <strong>By:</strong> {book.author}
                </p>
                <p className="text-gray-700 mt-4">
                    <strong>Review:</strong> {book.review}
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Category:</strong> {book.category}
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Rating:</strong> {book.rating}
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Total Pages:</strong> {book.totalPages}
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Publisher:</strong> {book.publisher}
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Year of Publishing:</strong> {book.yearOfPublishing}
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Tags:</strong> {book.tags.join(", ")}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                    <button
                        className="w-full lg:w-auto border rounded border-green-500 px-4 py-2 hover:bg-green-500 hover:text-white transition"
                        onClick={readHandle}
                    >
                        Mark as Read
                    </button>
                    <button
                        className="w-full lg:w-auto border rounded border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white transition"
                        onClick={wishListHandle}
                    >
                        Add to Wishlist
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
