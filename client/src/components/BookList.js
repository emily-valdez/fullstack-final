import React from "react";
import BookTile from "./BookTile";

function BookList({books, authors}) {
    const renderBookTiles = books.map(({id, title, year, heart_count, pepper_count, author_id, book_img}) => (
        <BookTile 
            key={id}
            id={id}
            title={title}
            year={year}
            heart_count={heart_count}
            pepper_count={pepper_count}
            author_id={author_id}
            book_img={book_img}
        />
    ));
    return <ul className="tiles">{renderBookTiles}</ul>
}

export default BookList;