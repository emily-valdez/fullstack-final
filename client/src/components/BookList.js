import React from "react";
import BookTile from "./BookTile";


function BookList({books}){
    const renderBookTiles = books.map(({id, title, year, author_id, heart_count, pepper_count, book_img}) => (
        <BookTile 
            key={id} 
            id={id}
            title={title}
            year={year}
            author_id={author_id}
            heart_count={heart_count}
            pepper_count={pepper_count}
            book_img={book_img}
            />
    ))
        
    return <ul className="tiles">{renderBookTiles}</ul>
}

export default BookList;



