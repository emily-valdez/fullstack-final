import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from "react-router-dom";

import Register from "./Register"
import NavBar from "./NavBar"


function App() {
  const [user, setUser] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(null)
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
        resp.json().then((user) => {
        setIsLoggedIn(user)
        setUser(user)
      })
      } else {
          resp.json().then(() => navigate('/')) 
          console.log('error')
      }
    })
  }, [])


  if (!user) {
    return <Register setUser={setUser} />
  }

  const context = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn
  }

  return <div>
    <ThemeProvider theme={black_theme}>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Outlet context={context}/>
    </ThemeProvider >
  </div>
}
export default App;



