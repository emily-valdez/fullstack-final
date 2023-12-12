import React from "react";
import AuthorTile from "./AuthorTile";

function AuthorList({authors}) {
    const renderAuthorTiles = authors.map(({id, name, publisher, tiktok, author_img}) => (
        <AuthorTile 
            key={id}
            id={id}
            name={name}
            publisher={publisher}
            tiktok={tiktok}
            author_img={author_img}
        />
    ));
    return <ul className="tiles">{renderAuthorTiles}</ul>
}

export default AuthorList;