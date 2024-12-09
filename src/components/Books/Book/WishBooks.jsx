import { useState, useEffect } from "react";

const WishBooks = () => {
    const [wishListBooks, setWishListBooks] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("wishListBooks")) || [];
        console.log("Fetched Wishlist Books:", data);
        setWishListBooks(data);
    }, []);

    return (
        <div className="book-list">
            <h1>Wishlist Books</h1>
            {wishListBooks.length === 0 ? (
                <p>No books found in Wishlist.</p>
            ) : (
                wishListBooks.map((book) => (
                    <div key={book.bookId} className="book-card">
                        <img src={book.image} alt={book.bookName} />
                        <h3>{book.bookName}</h3>
                        <p>{book.author}</p>
                        <p>Rating: {book.rating}</p>
                        <button onClick={() => alert("View details for " + book.bookName)}>
                            View Details
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default WishBooks;
