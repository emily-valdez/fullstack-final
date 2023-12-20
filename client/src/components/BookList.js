import React, {useState} from "react";
import BookTile from "./BookTile";


function BookList({books, setBooks}){
    const handleUpdateBook = (updatedBook) => {
        const updatedBooksArray = books.map(book => {
          if (book.id === updatedBook.id) return updatedBook
          else return book;
        });
        setBooks(updatedBooksArray)
      }
    const renderBookTiles = books.map(({id, title, year, author_id, heart_count, pepper_count, book_img, authors:{name}}) => (
        <BookTile 
            key={id} 
            id={id}
            title={title}
            year={year}
            author_id={author_id}
            heart_count={heart_count}
            pepper_count={pepper_count}
            book_img={book_img}
            authors={name}
            handleUpdateBook={handleUpdateBook}
            />
    ))
        
    return <ul className="tiles">{renderBookTiles}</ul>
}

export default BookList;



