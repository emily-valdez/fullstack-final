import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import BookList from "./BookList"


function Books() {
    const {user} = useOutletContext()
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books')
          .then((r) => r.json())
          .then((books) => {
            setBooks(books);
          })
      }, []);

      function onNewBook(newBook) {
        setBooks((currentBooks) => [...currentBooks, newBook]);
      }

    return(
        <main>
            <BookList
                books={books}
                onNewBook={onNewBook}
            />
        </main>
    )
}

export default Books
