import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"


function UserBook() {
    const [userbook, setUserBook] = useState([]);
    
        useEffect(() => {
            fetch("http://127.0.0.1:5555/api/v1/users_books")
              .then((resp) => resp.json())
              .then((allUserBook) => setUserBook(allUserBook));
          }, []);
    
    return (
        <div>
            <NavBar />
    
        </div>
    )
}
  
  export default UserBook;