import React, { useState, useEffect } from "react";
import AuthorList from "./AuthorList"
import NavBar from "./NavBar"

function Authors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
      fetch('/authors')
        .then((r) => r.json())
        .then((authors) => setAuthors(authors));
    }, []);

    return(
        <main>
            <NavBar />
            <AuthorList
                authors={authors}
            />
        </main>
    )
}

export default Authors;
