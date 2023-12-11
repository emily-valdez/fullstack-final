import React from "react";
// import BookTile from "./BookTile";

function AuthorList({authors}) {
    const renderAuthorTiles = authors.map(({id, name, publisher, tiktok}) => (
        <BookTile 
            key={id}
            id={id}
            name={name}
            publisher={publisher}
            tiktok={tiktok}
        />
    ));
    return <ul className="tiles">{renderAuthorTiles}</ul>
}

export default AuthorList;