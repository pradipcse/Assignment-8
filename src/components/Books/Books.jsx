import { useEffect, useState } from "react";
import Book from "./Book/Book";


const Books = () => {
    const [books , setBooks]=useState([])

    useEffect( ()=>{
       fetch('books.json')
       .then(res => res.json())
       .then(data => setBooks(data))
    },[])

    return (
        <div className="pt-10">
            <h1 className="text-4xl font-bold text-center my-12">Books</h1>
            <div className="grid grid-cols-3 gap-7">
               {
                books.map( book =><Book key={book.bookId} book={book}></Book>)
               }
            </div>
        </div>
    );
};

export default Books;