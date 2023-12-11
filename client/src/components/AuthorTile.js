import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


function AuthorTile({id, name, publisher, tiktok}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
        subheader={publisher}
      />
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="author photo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          TikTok: {tiktok}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AuthorTile;

