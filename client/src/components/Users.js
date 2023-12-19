import React, { useState, useEffect } from "react";
import UserList from "./UserList"

function Users({id, username}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('/avi/v1/users')
        .then((r) => r.json())
        .then((users) => setUsers(users));
    }, []);

    return(
        <main>
            <UserList 
            users={users}/>
        </main>
    )
}

export default Users;