import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from "react-router-dom";

import Books from "./Books"
import Register from "./Register"
import NavBar from "./NavBar"
import Authors from "./Authors"
import Bookshelf from "./Bookshelf"
import FAQ from "./FAQ"
import Logout from "./Logout"

function App() {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

const black_theme = createTheme({
  palette: {
      primary: {
        light: '#666666',
        main: '#0d0d0d',
        dark: '#00000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#666666',
        main: '#0d0d0d',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  useEffect(() => {
    fetch('/authorized')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
          resp.json().then(() => navigate('/')) 
          console.log('error')
      }
    })
  }, [])

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        navigate('/logout')
        setUser(null)
        navigate('/')
      }
    })
  }

  if (!user) {
    return <Register setUser={setUser} />
  }

  const context = {
    user,
    setUser
  }

  return <div>
    <ThemeProvider theme={black_theme}>
      <NavBar user={user} setUser={setUser}/>
      <Outlet context={context}/>
    </ThemeProvider >
  </div>
}
export default App;



