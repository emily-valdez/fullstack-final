import React, { useState, useEffect } from "react";
import BookList from "./BookList"

function Books() {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        fetch("http://localhost:5555/books")
          .then((resp) => resp.json())
          .then((allBooks) => setBooks(allBooks));
      }, []);

      useEffect(() => {
        fetch("http://localhost:5555/authors")
          .then((resp) => resp.json())
          .then((allAuthors) => setAuthors(allAuthors));
      }, []);


    return(
        <main>
            <BookList
                books={books}
                authors={authors}
            />
        </main>
    )
}

export default Books;
