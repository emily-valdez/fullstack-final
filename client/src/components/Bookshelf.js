import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "./NavBar"
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddIcon from '@mui/icons-material/Add';

// import {} from '@mui/material/colors';


// function UserBook({books}) {
//         const [userbook, setUserBook] = useState([]);
        
//             useEffect(() => {
//                 fetch("http://127.0.0.1:5555/api/v1/users_books")
//                   .then((resp) => resp.json())
//                   .then((allUserBook) => setUserBook(allUserBook));
//               }, []);

const cards = [1, 2, 3, 4, 5, 6, 7, 8];


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

export default function Bookshelf() {
  return (
    <ThemeProvider theme={black_theme}>
        <NavBar />
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
              <Button sx={{ bgcolor: 'black'}} variant="contained">See all Books</Button>
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



// function UserBook() {
//     const [userbook, setUserBook] = useState([]);
    
//         useEffect(() => {
//             fetch("http://127.0.0.1:5555/api/v1/users_books")
//               .then((resp) => resp.json())
//               .then((allUserBook) => setUserBook(allUserBook));
//           }, []);
    
//     return (
//         <div>
//             <NavBar />
    
//         </div>
//     )
// }
  
//   export default UserBook;