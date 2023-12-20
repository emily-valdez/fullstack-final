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

      function handleNewBook(newBook) {
        setBooks((currentBooks) => [...currentBooks, newBook]);
      }

      // function handleUpdateBook(updatedBook) {
      //   const updatedBooks = books.map((book) =>
      //   book.id === updatedBook.id ? updatedBook : book
      //   );
      //   setBooks(updatedBooks)
      // }

    return(
        <main>
            <BookList
                books={books}
                setBooks={setBooks}
                onNewBook={handleNewBook}
                user={user}
                // onUpdateBook={handleUpdateBook}
            />
        </main>
    )
}

export default Books
