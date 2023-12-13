import React from "react";
import UserTile from "./UserTile"

function UserList({users}) {
  const renderUserList = users.map(({id, username}) => (
    <UserTile
        key={id}
        id={id}
        username={username}
    />
  ))

    return <ul className="users">{renderUserList}</ul>
}

export default UserList;