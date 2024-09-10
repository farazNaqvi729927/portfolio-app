import { AppBar, Box, Button, Card, CardContent, CardMedia, Container, Link, Stack, styled, TextField, Toolbar, Typography } from '@mui/material'
import faraz from '../src/FARAZ.jpg'
import kfc from '../src/pic1.png'
import othello from '../src/Othello.png'
import counter from '../src/counter.png'
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {


  const NavBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-around',
    position: 'sticky',
    backgroundColor: 'black',
    fontWeight: 'bold',
    color: '8b9eb7',
    fontSize: '1.5rem',
    '@media (min-width: 1280px)': {
      fontSize: '1.7rem',
    },
  });




  const [fromValues, setformValues] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });


  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_0wazajj';
    const templateID = 'template_8wlxto7';
    const userID = '7lnC_-gC9KTTvTPhA';


    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          console.log('Message Sent Successfully!', result.text);
          toast.success('Message Sent Successfully!');
          setformValues({
            ...fromValues,
            from_name: '',
            from_email: '',
            message: ''
          });

        },
        (error) => {
          console.error('Failed to send message...', error.text);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  }




  const handleChange = (e) => {
    const { name, value } = e.target
    setformValues({
      ...fromValues,
      [name]: value,
    })
  }






  return (
    <>

      <AppBar>

        <NavBar>

          <Link href="#home" underline="none" sx={{ color: 'white' }}>
            HOME
          </Link>

          <Link href="#about" underline="none" sx={{ color: 'white' }}>
            ABOUT
          </Link>

          <Link href="#projects" underline="none" sx={{ color: 'white' }}>
            PROJECTS
          </Link>

          <Link href="#contact" underline="none" sx={{ color: 'white' }}>
            CONTACT
          </Link>

        </NavBar>

      </AppBar>




      <Box id='home' sx={{ paddingTop: '7em', textAlign: 'center', textShadow: '1px 1px black;' }}>

        <Box sx={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto' }}>
          <img src={faraz} className="img-thumbnail responsive-img" alt="..." />
        </Box>


        <Box padding='1em'>

          <Typography variant='h4' component='p' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '2.125rem', sm: '2rem', md: '2.5rem', lg: '2.7rem' } }}>
            Welcome to my Portfolio!
          </Typography>


          <Typography variant='h5' component='p' sx={{ textAlign: 'center', fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '1.7rem' } }}>
            Hi! I am Faraz Hassan Naqvi
          </Typography>


          <Container >
            <Typography sx={{ padding: '1em', fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.5rem'} }} >
              I specialize in creating robust, User-Friendly and responsive websites. <br /> I am always yearning for oppurtunies to learn new things. <br />
            </Typography>
          </Container>


          <Box sx={{ color: "primary" }}>
            <Typography sx={{ fontSize: '1.5em', fontWeight: 'bold' }} >Scroll Down</Typography>
          </Box>


          <Box sx={{ paddingTop: '1em' }}>
            <a href="#about">
              <svg data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2200" data-aos-easing="ease-out" xmlns="http://www.w3.org/2000/svg" width="60" height="72" viewBox="0 0 60 72">
                <path d="M0 0 L30 32 L60 0" stroke="white" fill="none"></path>
                <path d="M0 20 L30 52 L60 20" stroke="white" fill="none"></path>
                <path d="M0 40 L30 72 L60 40" stroke="white" fill="none"></path>
              </svg>
            </a>
          </Box>


        </Box>


      </Box>



      <Box id='about' sx={{ paddingTop: '7em', textAlign: 'center' }}>

        <Typography sx={{ fontWeight: 'bold', textShadow: '1px 1px black;', fontSize: { xs: '2.125rem', sm: '2.125rem', md: '2.125rem', lg: '2.5rem' } }} variant='h4' textAlign='center'>
          About Me
        </Typography>

        <Container sx={{ padding: '1em', textShadow: '1px 1px black;' }}>

          <Typography sx={{ padding: '2em', fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.5rem' } }}>
            As a frontend developer, I specialize in building responsive, user-friendly websites and web applications that prioritize seamless user experiences. My expertise lies in JavaScript, particularly with modern ES6 features, as well as React, HTML, and CSS. <br />
            I am skilled in custom development, ensuring that each project is tailored to the client’s needs.
          </Typography>

        </Container>



        <Container >

          <Typography variant='h5' sx={{ fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '1.7rem' } }}>
            My Skills
          </Typography>


          <Box className='sk1'>

            <Typography className='skill1'>JAVASCRIPT</Typography>
            <Typography className='skill2'>REACTJS</Typography>
            <Typography className='skill3'>HTML</Typography>

          </Box>


          <Box className = 'sk2'>
            <Typography className='skill4'>RESPONSIVE DESIGN</Typography>
          </Box>

          <Box className = 'sk3'>

            <Typography className='skill5'>BOOTSTRAP</Typography>
            <Typography className='skill6'>GIT</Typography>
            <Typography className='skill7'>MUI</Typography>
            <Typography className='skill8'> CSS</Typography>

          </Box>

        </Container>

      </Box>



      <Box id='projects' sx={{ paddingTop: '7em', textAlign: 'center' }}>

        <Typography sx={{ fontWeight: 'bold', textShadow: '1px 1px black', fontSize: { xs: '2.125rem', sm: '2.125rem', md: '2.125rem', lg: '2.5rem' }  }} variant='h4' textAlign='center'>
          Projects
        </Typography>


        <Typography sx={{ padding: '1em', textShadow: '1px 1px black',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.5rem' } }} textAlign='center'>
          These are some of my Projects I created from scratch:
        </Typography>




        <Container sx={{ padding: '3em', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>

          <Card sx={{ backgroundColor: '#8b9eb7', width: '100%', padding: '20px' }}>

            <CardMedia sx={{ borderRadius: '2%' }} component="img" height="194" image={kfc} alt="KFC Clone" />


            <Typography variant='h6' sx={{ textAlign: 'center', alignItems: 'center', color: 'rgb(13, 21, 95)',fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem', lg: '1.7rem'} }}>
              KFC Pakistan Clone
            </Typography>

            <CardContent>

              <Typography variant="h6" sx={{ color: 'black',fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: '1.4rem' } }}>
                This is a clone of the KFC Pakistan Website that I created from scratch.It's a proper functioning frontend of the original website.
              </Typography>

            </CardContent>


            <Stack spacing={2} p={2}>
              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.3rem'} }} variant="outlined" href="#outlined-buttons">
                Code Link
              </Button>

              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.3rem'}  }} variant="outlined" href="https://kfc-clone2.netlify.app" target='_blank'>
                Live Demo
              </Button>
            </Stack>

          </Card>




          <Card sx={{ backgroundColor: '#8b9eb7', width: '100%', padding: '20px' }}>

            <CardMedia sx={{ borderRadius: '2%' }} component="img" height="194" image={othello} alt="KFC Clone" />


            <Typography variant='h6' sx={{ textAlign: 'center', alignItems: 'center', color: 'rgb(13, 21, 95)',fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem', lg: '1.7rem' } }}>
              Othello Game
            </Typography>


            <CardContent>

              <Typography variant="h6" sx={{ color: 'black',fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: '1.4rem'} }}>
                In this Game you have a 8x8 Board with Black and white Pieces, colour has the most Pieces on the Board at the end of the game takes the win.
              </Typography>
            </CardContent>


            <Stack spacing={2} p={2}>
              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.3rem'} }} variant="outlined" href="#outlined-buttons">
                Code Link
              </Button>

              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.3rem'} }} variant="outlined" href="https://myothello1.netlify.app" target='_blank'>
                Live Demo
              </Button>
            </Stack>

          </Card>




          <Card sx={{ backgroundColor: '#8b9eb7', width: '100%', padding: '20px' }}>

            <Box sx={{ padding: '5px' }}>
              <CardMedia sx={{ border: '1px solid grey', borderRadius: '2%' }} component="img" height="194" image={counter} alt="KFC Clone" />

            </Box>



            <Typography variant='h6' sx={{ textAlign: 'center', alignItems: 'center', color: 'rgb(13, 21, 95)',fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem', lg: '1.7rem' } }}>
              Word Counter App
            </Typography>


            <CardContent >

              <Typography variant="h6" sx={{ color: 'black',fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: '1.4rem'} }}>
                The Word Counter App is a good and efficient tool designed to help users count the number of words in any given text.
              </Typography>

            </CardContent>


            <Stack spacing={2} p={2} >
              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.3rem'} }} variant="outlined" href="#outlined-buttons">
                Code Link
              </Button>

              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.3rem'} }} variant="outlined" href="https://word-counter112.netlify.app" target='_blank'>
                Live Demo
              </Button>
            </Stack>

          </Card>

        </Container>

      </Box>




      <Box id='contact' sx={{ paddingTop: '7em', textAlign: 'center' }}>

        <Typography sx={{ fontWeight: 'bold', textShadow: '1px 1px black',fontSize: { xs: '2.125rem', sm: '2.125rem', md: '2.125rem', lg: '2.5rem'} }} variant='h4' >
          Contact Me
        </Typography>



        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em' }}>

          <Box component="form" sx={{ width: '100%', maxWidth: '450px', padding: '2em', borderRadius: '8%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', gap: '1.5em' }} ref={form} onSubmit={sendEmail}  >


            <Box>

              <Typography variant="h6" sx={{ color: 'lightgrey',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.5rem'} }}>
                Your Name
              </Typography>
              <TextField sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&:hover fieldset': { borderColor: 'rgb(13, 21, 95)' }, backgroundColor: '#8b9eb7', '&.Mui-focused fieldset': { borderColor: 'lightgrey' } }, '& .MuiInputBase-input': { color: 'black' } }} placeholder="Your Name" variant="outlined" fullWidth value={fromValues.from_name} onChange={handleChange} name="from_name" required />

            </Box>



            <Box>
              <Typography variant="h6" sx={{ color: 'lightgrey',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.5rem'} }}>
                Your Email Address
              </Typography>
              <TextField sx={{ '& .MuiInputLabel-root': { color: 'rgb(13, 21, 95)' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&:hover fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&.Mui-focused fieldset': { borderColor: 'rgb(13, 21, 95)' } }, backgroundColor: '#8b9eb7', '& .MuiInputBase-input': { color: 'black' }, borderRadius: '' }} placeholder="Your Email Address" variant="outlined" fullWidth type="email" value={fromValues.from_email} onChange={handleChange} name="from_email" required />

            </Box>




            <Box>
              <Typography variant="h6" sx={{ color: 'lightgrey',fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.3rem', lg: '1.5rem'} }}>
                Your Message
              </Typography>
              <TextField sx={{ '& .MuiInputLabel-root': { color: 'rgb(13, 21, 95)' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&:hover fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&.Mui-focused fieldset': { borderColor: 'rgb(13, 21, 95)' } }, backgroundColor: '#8b9eb7', '& .MuiInputBase-input': { color: 'black' } }} placeholder="Type Here" variant="outlined" multiline rows={6} fullWidth value={fromValues.message} onChange={handleChange} name="message" required />
            </Box>


            <Button type="submit" backgroundColor="primary" variant="contained" size="large">
              Submit
            </Button>
          </Box>

        </Container>

      </Box>




      <Box>
        <ToastContainer style={{ marginTop: '3.5%' }} position="top-center" theme="dark" autoClose={2500} />
      </Box>



      <Box sx={{ padding: '2em', justifyContent: 'center', textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
        <Typography fontSize='large' variant='p'>2024 Faraz Naqvi. All rights reserved.</Typography>
      </Box>


    </>
  )
}
