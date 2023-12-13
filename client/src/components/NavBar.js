import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Container from '@mui/material/Container';

function NavBar(){
  
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
                flexGrow: .02,
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
              href="/"
              sx={{ 
              flexGrow: .015,
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
              flexGrow: .015,
              fontFamily: 'Segoe UI',
              color: 'inherit', 
              textDecoration: 'none'
              }}>
              Authors
            </Typography>
            <Typography variant="h6" 
              component="a"
              href="/" 
              sx={{
               flexGrow: .015,
               fontFamily: 'Segoe UI',
               color: 'inherit', 
               textDecoration: 'none'
              }}>
              My Bookshelf
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
  
export default NavBar