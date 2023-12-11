import React, { useState, useEffect } from "react";
import AuthorList from "./AuthorList"

function Authors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
      fetch('/authors')
        .then((r) => r.json())
        .then((authors) => setAuthors(authors));
    }, []);

    return(
        <main>
            <AuthorList
                authors={authors}
            />
        </main>
    )
}

export default Authors;
