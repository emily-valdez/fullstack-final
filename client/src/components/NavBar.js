import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

function NavBar({isLoggedIn, setIsLoggedIn}){
  const navigate = useNavigate()

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        // navigate('/')
        setIsLoggedIn(null)
        navigate('/')
      }
    })
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: 'black'}}>
        <Container maxWidth="l">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuBookIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                flexGrow: .1,
                fontFamily: 'Segoe UI',
                fontWeight: 500,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BookTok 
            </Typography>
            <Typography variant="h6" 
              component="a" 
              href="/books"
              sx={{ 
              flexGrow: .15,
              fontFamily: 'Segoe UI', 
              color: 'inherit',
              textDecoration: 'none'
              }}>
              Books
            </Typography>
            <Typography variant="h6"
              component="a"
              href="/authors" 
              sx={{ 
              flexGrow: .15,
              fontFamily: 'Segoe UI',
              color: 'inherit', 
              textDecoration: 'none'
              }}>
              Authors
            </Typography>
            <Typography variant="h6" 
              component="a"
              href="/users_books" 
              sx={{
               flexGrow: 7.5,
               fontFamily: 'Segoe UI',
               color: 'inherit', 
               textDecoration: 'none'
              }}>
              My Bookshelf
            </Typography><Typography variant="h6" 
              component="a"
              href="/faq" 
              sx={{
               flexGrow: .15,
               fontFamily: 'Segoe UI',
               color: 'inherit', 
               textDecoration: 'none'
              }}>
              F.A.Q.
            </Typography>
            {!isLoggedIn ? (
            <> 
              <Typography variant="h6" 
                component="a"
                href="/" 
                sx={{
                flexGrow: .15,
                fontFamily: 'Segoe UI',
                color: 'inherit', 
                textDecoration: 'none'
                }}> 
                Login / Register
              </Typography>
            </> ) : (
            <>
              <Typography variant="h6" 
                component="a"
                href="/" onClick={handleLogout}
                sx={{
                flexGrow: .15,
                fontFamily: 'Segoe UI',
                color: 'inherit', 
                textDecoration: 'none'
                }}> 
                Logout
              </Typography>
            </> )
            }
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
  
export default NavBar