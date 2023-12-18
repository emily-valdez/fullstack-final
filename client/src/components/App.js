import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import NavBar from "./NavBar"
import Books from "./Books"
import Register from "./Register"


function App() {
  const [user, setUser] = useState(null)
  const [register, setRegister] = useState(false)
  const navigate = useNavigate()
  // const [books, setBooks] = useState([])

  // useEffect(() => {
  //   fetch("/books")
  //     .then((resp) => resp.json())
  //     .then((allBooks) => setBooks(allBooks));
  //   }, []);

  useEffect(() => {
    fetch('/authorized')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
          resp.json().then(() => navigate('/login')) 
          console.log('error')
      }
    })
  }, [])

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {setUser(null); setRegister(false)}
    })
  }

  if (!user) {
    return <Register setUser={setUser} />
  }


  return <div>
      <Button variant="contained" onClick={handleLogout}>Logout</Button>
      <Books /> 
    </div>
}
export default App;



