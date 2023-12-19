import React, { useState, useEffect } from "react";
import BookList from "./BookList"
import NavBar from "./NavBar"


function Books({authors}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books')
          .then((r) => r.json())
          .then((books) => {
            setBooks(books);
          })
      }, []);

    return(
        <main>
            <NavBar />
            <BookList
                books={books}
                authors={authors}
            />
        </main>
    )
}

export default Books
