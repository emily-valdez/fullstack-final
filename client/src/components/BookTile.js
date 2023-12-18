import * as React from 'react';
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

function BookTile({id, title, year, heart_count, pepper_count, author_id, book_img}) {
  const cards = [id]
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
                subheader={author_id}
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
                <IconButton aria-label="Loved it!">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="Spicy">
                  <LocalFireDepartmentIcon />
                </IconButton>
                <IconButton sx={{}} aria-label="Add to bookshelf">
                  <AddIcon />
                </IconButton>
            </Card>
          </Grid>
          ))}
        </Box>
  );
}

export default BookTile;

