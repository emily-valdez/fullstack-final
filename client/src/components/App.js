import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logout from "./Logout"

import Books from "./Books"
import Register from "./Register"


function App() {
  const [user, setUser] = useState(null)
  // const [register, setRegister] = useState(false)
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
          resp.json().then(() => navigate('/books')) 
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
    return <Register user={user} setUser={setUser} />
  }


  return <div>
    <ThemeProvider theme={black_theme}>
      {/* <Button variant="contained" onClick={handleLogout}>Logout</Button> */}
      <Books /> 
      <Logout onClick={handleLogout}/>
    </ThemeProvider >
  </div>
}
export default App;



