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

function Bookshelf() {
  const [userBook, setUserBook] = useState([]);
  // const cards = [1, 2, 3, 4, 5, 6];
        console.log(userBook)
    useEffect(() => {
        fetch(`/users_books`)
          .then((resp) => resp.json())
          .then((userBook) => setUserBook(userBook));
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
              <Button href="/addbook" variant="outlined">Add a New Book</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
        <Box sx={{ 
        display: 'inline-flex ', 
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        }}>
        {userBook.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}      
          >  
            <Card variant="outlined" 
            sx={{ 
              height: 520,
              width: 350,
              alignContent: 'center'
              }}>
              <CardHeader
                title={card.title}
                subheader={card.authors.name}
              />
              <CardMedia
                component="img"
                height="350"
                image={card.book_img}
                alt="book image"
                sx={{objectFit: "contain" }}
              />
              <CardContent>
              <Typography sx={{}} variant="body2" color="text.secondary">
                  Published: {card.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  User Ratings: {card.heart_count} likes and {card.pepper_count} spicy
                </Typography>
              </CardContent>
                {/* <IconButton aria-label="Loved it!">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="Spicy">
                  <LocalFireDepartmentIcon />
                </IconButton>
                <IconButton aria-label="Add to bookshelf">
                  <AddIcon />
                </IconButton> */}
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
