import React, { useState, useEffect } from "react";
import BookList from "./BookList"

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5555/books")
          .then((resp) => resp.json())
          .then((allBooks) => setBooks(allBooks));
      }, []);

    
    return(
        <main>
            <BookList
                books={books}
            />
        </main>
    )
}

export default Books;
