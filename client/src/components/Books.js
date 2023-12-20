import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import BookList from "./BookList"
import Bookshelf from "./Bookshelf"

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

      function handleNewBook(newBook) {
        setBooks((currentBooks) => [...currentBooks, newBook]);
      }


    return(
        <main>
            <BookList
                books={books}
                setBooks={setBooks}
                onNewBook={handleNewBook}
                user={user}
            />
        </main>
    )
}

export default Books


    // function handleUpdateBook(updatedBook) {
      //   const updatedBooks = books.map((book) =>
      //   book.id === updatedBook.id ? updatedBook : book
      //   );
      //   setBooks(updatedBooks)
      // }