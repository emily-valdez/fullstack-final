import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header"
import Books from "./Books"


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);
 
  return (
    <div>
      <Header />
      <Books />
    </div>
  
  )
}


export default App;

