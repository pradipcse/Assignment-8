import { useEffect, useState } from "react";

const Read = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("readBooks")) || [];
        console.log("Fetched Read Books:", data);
        setReadBooks(data);
    }, []);

    return (
        <div className="book-list mt-10 pt-12">
            <h1>Read Books</h1>
            {readBooks.length === 0 ? (
                <p>No books found in Read Books.</p>
            ) : (
                readBooks.map((book) => (
                    <div key={book.bookId} className="book-card flex justify-between items-center gap-8">
                        <img src={book.image} alt={book.bookName} className="object-contain h-[10%] w-[15%]" />
                       <div className="w-3/4">
                       <h3>{book.bookName}</h3>
                        <p>{book.author}</p>
                        <p>Rating: {book.rating}</p>
                        <button onClick={() => alert("View details for " + book.bookName)}>
                            View Details
                        </button>
                       </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Read;
