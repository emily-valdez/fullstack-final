import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

function BookTile({id, title, year, heart_count, pepper_count, author_id, book_img}) {

  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ 
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        // flexDirection: 'row',
        // alignContent: 'left'
        }}>
          <Card variant="outlined" 
          sx={{ 
            maxWidth: 300, 
            maxHeight: 550, 
            // display: "flex", 
            // flexWrap: "wrap", 
            // flexDirection:"row"
            }}>
            <CardHeader
              title={title}
              subheader="Author:"
            />
            <CardMedia
              component="img"
              height="300"
              image={book_img}
              alt="book cover"
              sx={{objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                User Ratings: {heart_count} likes and {pepper_count} spicy
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
      </Box>
    </div>
  );
}

export default BookTile;

