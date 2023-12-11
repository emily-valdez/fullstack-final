import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddIcon from '@mui/icons-material/Add';


function BookTile({id, title, year, heart_count, pepper_count, author_id}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader="Author:"
      />
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="book cover"
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
  );
}

export default BookTile;

