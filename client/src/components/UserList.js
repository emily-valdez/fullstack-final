import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('/users')
        .then((r) => r.json())
        .then((users) => setUsers(users));
    }, []);

    return(
        <main>
            <NavBar />
            
        </main>
    )
}

export default Users;