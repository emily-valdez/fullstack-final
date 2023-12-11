import React from "react";

function BookTile({id, title, year, heart_count, pepper_count, author_id}) {
    
    return (
        <li className="tile">
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{year}</h4>
            <h4>{heart_count}</h4>
            <h4>{pepper_count}</h4>
            <h4>{author_id}</h4>
        </li>

    )
}

export default BookTile;