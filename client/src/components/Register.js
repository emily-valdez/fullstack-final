import { useState } from 'react'
import { Box, Button, Container, TextField } from '@mui/material';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useOutletContext } from "react-router-dom";
import {FormControl, InputLabel} from '@mui/material'

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

function Register() {
    const [signup, setSignup] = useState(true)
    const [error, setError] = useState(null)
    const {isLoggedIn, setIsLoggedIn} = useOutletContext()
    const navigate = useNavigate();

    const signupSchema = yup.object().shape({
        username: yup.string().min(4, 'Username must be at least 4 characters.').max(15, 'Username may not be more than 15 characters.'),
        email: yup.string().email('Invalid email address.'),
        password: yup.string().min(6, 'Password must be at least 6 characters.').max(15, 'Password may not be longer than 15 characters'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match.')
    })
    const loginSchema = yup.object().shape({
        username: yup.string().required('Username required.'),
        password: yup.string().required('Password required.')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: signup ? signupSchema : loginSchema,
        onSubmit: (values) => {
            const endpoint = signup ? '/users' : '/login'
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then(({ user }) => {
                        setIsLoggedIn(user)
                        setError(null)
                        navigate("/books")
                    })
                } else { 
                    resp.json()
                    .then(({error}) => setError(error))
                }
            })
        }
    })

    function toggleSignup() {
        setSignup((currentSignup) => !currentSignup)
    }

    return (
    <ThemeProvider theme={black_theme}>
        <Container maxWidth='xs'>
            <Button onClick={toggleSignup}>{signup ? 'Already have an account? Login here.' : 'New user? Register for an account.'}</Button>

            <form sx={{}} onSubmit={formik.handleSubmit}>
                    <TextField 
                        id="username" 
                        label="Username" 
                        variant="outlined" 
                        error={!!formik.errors.username}
                        helperText={formik.errors.username}
                        required
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        fullWidth='true'
                    />
                <Box>
                    {signup && <TextField 
                        id="email"
                        label="Email"
                        variant="outlined" 
                        error={!!formik.errors.email}
                        helperText={formik.errors.email}
                        required
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        fullWidth='true'
                    />}
                </Box>
                <Box>
                    <TextField 
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined" 
                        error={!!formik.errors.password}
                        helperText={formik.errors.password}
                        required
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        fullWidth='true'
                    />
                </Box>
                <Box>
                    {signup && <TextField 
                        id="passwordConfirmation"
                        label="Confirm Password"
                        type="password"
                        variant="outlined" 
                        error={!!formik.errors.passwordConfirmation}
                        helperText={formik.errors.passwordConfirmation}
                        required
                        value={formik.values.passwordConfirmation}
                        onChange={formik.handleChange}
                        fullWidth='true'
                    />}
                </Box>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </Container>
    </ThemeProvider>
    )
}

export default Register;






// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import {FormControl, InputLabel, TextField} from '@mui/material'


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="/">
//         BookTok
//       </Link>{' '}
//       {new Date().getFullYear()}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function Register() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'black' }}>
//             <MenuBookIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Create An Account
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <FormControl>
//                     <InputLabel htmlFor="username"></InputLabel>
//                     <TextField
//                         id="username"
//                         required
//                         fullWidth
//                         variant="outlined"
//                         label="Username"
//                     />
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl>
//                     <InputLabel htmlFor="email"></InputLabel>
//                     <TextField
//                         required
//                         fullWidth
//                         id="email"
//                         label="Email Address"
//                     />
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl>
//                    <InputLabel htmlFor="password"></InputLabel>
//                    <TextField
//                        required
//                        fullWidth
//                        id="password"
//                        label="Create Password"
//                    />
//                </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl>
//                    <InputLabel htmlFor="confirmpassword"></InputLabel>
//                    <TextField
//                        required
//                        fullWidth
//                        id="confirmpassword"
//                        label="Confirm Password"
//                    />
//                </FormControl>
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2, bgcolor: 'black'}}
//             >
//               Register
//             </Button>
//             <Grid container justifyContent="center">
//               <Grid item>
//                 <Link href="/Login" variant="body2">
//                   Already have an account? Login here.
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 3 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }