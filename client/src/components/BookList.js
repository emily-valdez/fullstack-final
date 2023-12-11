import React from "react";
import BookTile from "./BookTile";

function BookList({books}) {
    const renderBookTiles = books.map(({id, title, year, heart_count, pepper_count, author_id}) => (
        <BookTile 
            key={id}
            id={id}
            title={title}
            year={year}
            heart_count={heart_count}
            pepper_count={pepper_count}
            author_id={author_id}
        />
    ));
    return <ul className="tiles">{renderBookTiles}</ul>
}

export default BookList;