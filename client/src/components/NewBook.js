import React from "react"
import { useEffect, useState } from "react";

const initialState = {
    title: "",
    author: "",
    year: "",
    image: ""
}

function NewBook({onNewBook}) {
   const [formData, setFormData] = useState(initialState)
   const {title, author, year, image} = formData

   function handleChange(event) {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw Error("New book not created.");
        }
    })
    .then((newBookFromServer) => {
        onNewBook(newBookFromServer);
        setFormData(initialState);
    })
    .catch(console.log);
}

  return (
    <div className="new-book-form">
      <h2>New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Year Published"
          value={year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Book Cover Image URL"
          value={image}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default NewBook;