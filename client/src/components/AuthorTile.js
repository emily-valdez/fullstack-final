import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function AuthorTile({id, name, publisher, website, author_img}) {
  return(
    <Box sx={{ width: '100%' }}>
      <Grid
          container spacing={1}
          columns={3}
          direction="column"
          // justifyContent="center"
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
          title={name}
          subheader={publisher}
          />
          <CardMedia
          component="img"
          height="300"
          image={author_img}
          alt="author photo"
          sx={{objectFit: "contain" }}
          />
          <CardContent>
          <Typography variant="body2" color="text.secondary">
            {website}
          </Typography>
          </CardContent>
        </Card>
      </Grid>
  </Box>
  )
}
export default AuthorTile