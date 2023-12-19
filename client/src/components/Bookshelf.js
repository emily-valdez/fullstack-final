import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";


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

function Bookshelf({id}) {
  const {user, setUser} = useOutletContext()
  const [user_book, setUser_Book] = useState([]);
  const cards = [id];
        console.log(user_book)
    useEffect(() => {
        fetch('/users_books')
          .then((resp) => resp.json())
          .then((books) => setUser_Book(books));
      }, []);
      
    return (
    <ThemeProvider theme={black_theme}>
        <CssBaseline />
      <main>
        <Box
          sx={{
            backgroundImage: '',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Bookshelf
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button sx={{ bgcolor: 'black'}} href="/books" variant="contained">See all Books</Button>
              <Button variant="outlined">Add a New Book</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        <Box sx={{ 
        display: 'inline-flex ', 
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        }}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}      
          >  
            <Card variant="outlined" 
            sx={{ 
              height: 480,
              width: 350,
              alignContent: 'center'
              }}>
              <CardHeader
                title="Title"
                subheader
              />
              <CardMedia
                component="img"
                height="300"
                image
                alt="book image"
                sx={{objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  User Ratings: likes and spicy
                </Typography>
              </CardContent>
                <IconButton aria-label="Loved it!">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="Spicy">
                  <LocalFireDepartmentIcon />
                </IconButton>
                <IconButton aria-label="Add to bookshelf">
                  <AddIcon />
                </IconButton>
            </Card>
          </Grid>
          ))}
        </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Bookshelf;
