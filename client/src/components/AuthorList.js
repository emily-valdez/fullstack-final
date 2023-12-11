import React from "react";
import AuthorTile from "./AuthorTile";

function AuthorList({authors}) {
    const renderAuthorTiles = authors.map(({id, name, publisher, tiktok}) => (
        <AuthorTile 
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