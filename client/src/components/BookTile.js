import * as React from 'react';
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { useOutletContext } from "react-router-dom";

function BookTile({id, title, year, author_id, heart_count, pepper_count, book_img, authors, handleUpdateBook}) {
  const cards = [id]
  const {user, setUser} = useOutletContext()
  // const [user_book, setUser_Book] = useState([]);
  // const [newuser_book, setNewUser_Book] = useState([])

  const handleHearts = () => {
    fetch(`/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({heart_count: heart_count + 1}),
    })
      .then((r) => r.json())
      .then((data) => {
        handleUpdateBook(data)
      })
      .catch((error) => {
        console.log(error)
      })
    }

  const handlePeppers = () => {
    fetch(`/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({pepper_count: pepper_count + 1}),
      })
        .then((r) => r.json())
        .then((data) => {
          handleUpdateBook(data)
        })
        .catch((error) => {
          console.log(error)
        })
      }

  const handlePlus = () => {
        fetch(`/users_books`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              user_id: user.id,
              book_id: id
            }),
          })
          .then((r) => r.json())
            .then((user_book) => {
              console.log(user_book)
              })
            }
         console.log(user)
       
return (
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
              height:510,
              width: 350,
              alignContent: 'center'
              }}>
              <CardHeader
                title={title}
                subheader={authors}
              />
              <CardMedia
                component="img"
                height="300"
                image={book_img}
                alt="book cover"
                sx={{objectFit: "contain" }}
              />
              <CardContent>
              <Typography sx={{}} variant="body2" color="text.secondary">
                  Published: {year}
                </Typography>
                <Typography sx={{}} variant="subtitle2" color="text.secondary">
                  User Ratings: {heart_count} likes and {pepper_count} spicy
                </Typography>
              </CardContent >
                <IconButton aria-label="Loved it!" onClick={handleHearts}>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="Spicy" onClick={handlePeppers}>
                  <LocalFireDepartmentIcon />
                </IconButton>
                <IconButton sx={{}} aria-label="Add to bookshelf" onClick={handlePlus}>
                  <AddIcon />
                </IconButton>
            </Card>
          </Grid>
          ))}
        </Box>
  );
}

export default BookTile;



  // const handleHearts = async (updatedBook) => {
  //   const response = await fetch(`/books/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedBook),
  //   })
  //   const data = await response.json()
  //   handleHearts(data)
  // }