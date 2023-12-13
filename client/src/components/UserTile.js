import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


function UserTile({id, username}) {

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        title={username}
      />
      <CardMedia
        component="img"
        height="250"
        image="https://res.cloudinary.com/debhztqlv/image/upload/v1702467178/fofoaogzaket7zg2stcn.jpg"
        alt="user avatar"
        sx={{objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          User {id} - Joined on 12/13/2023.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserTile;
