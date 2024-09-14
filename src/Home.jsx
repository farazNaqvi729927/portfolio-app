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
    fontSize: 'calc(0.5rem + 1.5vw)',
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

          <Typography variant='h5' component='p' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 'calc(1rem + 1.5vw)' }}>
            Welcome to my Portfolio!
          </Typography>


          <Typography variant='h5' component='p' sx={{ marginTop: '0.2em', textAlign: 'center', fontSize: 'calc(1rem + 1vw)', fontWeight: 'bold' }}>
            I am Faraz Hassan Naqvi
          </Typography>


          <Typography sx={{ padding: '1em', fontSize: 'calc(1rem + 1vw)' }} >
            I specialize in creating robust, User-Friendly and responsive websites. <br /> I am always yearning for oppurtunies to learn new things. <br />
          </Typography>


          {/* <Box sx={{ color: "primary", marginTop: '3em' }}>
            <Typography sx={{ fontSize: 'calc(1rem + 0.8vw)', fontWeight: 'bold' }} >Scroll Down</Typography>
          </Box>


          <Box sx={{ paddingTop: '2em' }}>
            <a href="#about">
              <svg data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2200" data-aos-easing="ease-out" xmlns="http://www.w3.org/2000/svg" width="60" height="72" viewBox="0 0 60 72">
                <path d="M0 0 L30 32 L60 0" stroke="white" fill="none"></path>
                <path d="M0 20 L30 52 L60 20" stroke="white" fill="none"></path>
                <path d="M0 40 L30 72 L60 40" stroke="white" fill="none"></path>
              </svg>
            </a>
          </Box> */}


        </Box>


      </Box>





      <Box id='about' sx={{ paddingTop: '7em', textAlign: 'center' }}>

        <Typography sx={{ fontWeight: 'bold', textShadow: '1px 1px black;', fontSize: 'calc(1rem + 1.5vw)' }} variant='h4' textAlign='center'>
          About Me
        </Typography>


        <Typography sx={{ padding: '1em', fontSize: 'calc(1rem + 1vw)', textShadow: '1px 1px black;' }}>
          As a frontend developer, I specialize in building responsive, user-friendly websites and web applications that prioritize seamless user experiences. My expertise lies in JavaScript, particularly with modern ES6 features, as well as React, HTML, and CSS. <br />
        </Typography>





        <Typography sx={{ padding: '0.2em', fontSize: 'calc(1rem + 1vw)', textShadow: '1px 1px black;' }}>
          I am skilled in creating robust, User-Friendly and responsive websites. <br /> I am always yearning for oppurtunies to learn new things.
        </Typography>





        <Container >

          <Typography variant='h5' sx={{ marginTop: '1em', fontWeight: 'bold', fontSize: 'calc(1rem + 1.1vw)' }}>
            My Skills
          </Typography>


          <Box className='sk1'>

            <Typography className='skill1'>JAVASCRIPT</Typography>
            <Typography className='skill2'>REACTJS</Typography>
            <Typography className='skill3'>HTML</Typography>

          </Box>


          <Box className='sk2'>
            <Typography className='skill6'>GIT</Typography>
            <Typography className='skill7'>MUI</Typography>
            <Typography className='skill8'> CSS</Typography>
          </Box>

          <Box className='sk3'>

            <Typography className='skill5'>BOOTSTRAP</Typography>
            <Typography className='skill4'>RESPONSIVE DESIGN</Typography>


          </Box>

        </Container>

      </Box>





      <Box id='projects' sx={{ paddingTop: '7em', textAlign: 'center' }}>

        <Typography sx={{ fontWeight: 'bold', textShadow: '1px 1px black', fontSize: 'calc(1rem + 1.5vw)' }} variant='h4' textAlign='center'>
          Projects
        </Typography>


        <Typography sx={{ padding: '1em', textShadow: '1px 1px black', fontSize: 'calc(1rem + 1vw)' }} textAlign='center'>
          These are some of my Projects I created from scratch:
        </Typography>


        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '2em', gap: '3rem', justifyContent: 'center' }}>


          <Card className='cards' sx={{ backgroundColor: '#8b9eb7', borderRadius: '2%' }}>
            <CardMedia sx={{ borderRadius: '2%', padding: '2em' }} component="img" height="300" image={kfc} alt="KFC Clone" />

            <Typography variant='h6' sx={{ textAlign: 'center', alignItems: 'center', color: 'rgb(13, 21, 95)', fontSize: 'calc(1rem + 1vw)' }}>
              KFC Pakistan Clone
            </Typography>

            <CardContent>

              <Typography variant="h6" sx={{ color: 'black', fontSize: 'calc(1rem + 0.8vw)' }}>
                This is a clone of the KFC Pakistan Website that I created from scratch.It's a proper functioning frontend of the original website.
              </Typography>

            </CardContent>


            <Stack sx={{ justifyContent: 'center' }} spacing={5} p={3}>
              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white', fontSize: 'calc(1rem + 0.7vw)' }} variant="outlined" href="https://github.com/farazNaqvi729927/kfc-clone">
                Repo Link
              </Button>

              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white', fontSize: 'calc(1rem + 0.7vw)' }} variant="outlined" href="https://kfc-clone2.netlify.app" target='_blank'>
                Live Demo
              </Button>
            </Stack>


          </Card>



          <Card className='cards' sx={{ backgroundColor: '#8b9eb7', borderRadius: '2%' }}>
            <CardMedia sx={{ borderRadius: '2%', padding: '2em' }} component="img" height="300" image={othello} alt="KFC Clone" />

            <Typography variant='h6' sx={{ textAlign: 'center', alignItems: 'center', color: 'rgb(13, 21, 95)', fontSize: 'calc(1rem + 1vw)' }}>
              Othello Game
            </Typography>

            <CardContent>

              <Typography variant="h6" sx={{ color: 'black', fontSize: 'calc(1rem + 0.8vw)' }}>
                In this Game you have a 8x8 Board with Black and white Pieces, colour has the most Pieces on the Board at the end of the game wins.
              </Typography>

            </CardContent>


            <Stack sx={{ justifyContent: 'center' }} spacing={5} p={3}>
              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white', fontSize: 'calc(1rem + 0.7vw)' }} variant="outlined" href="https://github.com/farazNaqvi729927/othello-Game">
                Repo Link
              </Button>

              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white', fontSize: 'calc(1rem + 0.7vw)' }} variant="outlined" href="https://othello-game558.netlify.app/" target='_blank'>
                Live Demo
              </Button>
            </Stack>


          </Card>



          <Card className='cards' sx={{ backgroundColor: '#8b9eb7', borderRadius: '2%' }}>
            <CardMedia sx={{ borderRadius: '2%', padding: '2em' }} component="img" height="300" image={counter} alt="KFC Clone" />

            <Typography variant='h6' sx={{ textAlign: 'center', alignItems: 'center', color: 'rgb(13, 21, 95)', fontSize: 'calc(1rem + 1vw)' }}>
              Word Counter App
            </Typography>

            <CardContent>

              <Typography variant="h6" sx={{ color: 'black', fontSize: 'calc(1rem + 0.8vw)' }}>
                The Word Counter App is a good and efficient tool designed to help users count the number of words in any given text. Its easy to use.
              </Typography>

            </CardContent>


            <Stack sx={{ justifyContent: 'center' }} spacing={5} p={3}>
              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white', fontSize: 'calc(1rem + 0.7vw)' }} variant="outlined" href="https://github.com/farazNaqvi729927/word-counter">
                Repo Link
              </Button>

              <Button sx={{ backgroundColor: 'rgb(13, 21, 95)', color: 'white', fontSize: 'calc(1rem + 0.7vw)' }} variant="outlined" href="https://word-counter112.netlify.app" target='_blank'>
                Live Demo
              </Button>
            </Stack>


          </Card>

        </Box>
      </Box >









      <Box id='contact' sx={{ paddingTop: '10em', textAlign: 'center' }}>

        <Typography sx={{ fontWeight: 'bold', textShadow: '1px 1px black', fontSize: 'calc(1rem + 1.5vw)' }} variant='h4' >
          Contact Me
        </Typography>



        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em' }}>

          <Box component="form" className='contact' ref={form} onSubmit={sendEmail}  >


            <Box>

              <Typography className='conctN'>
                Your Name
              </Typography>
              <TextField sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&:hover fieldset': { borderColor: 'rgb(13, 21, 95)' }, backgroundColor: '#8b9eb7', '&.Mui-focused fieldset': { borderColor: 'lightgrey' } }, '& .MuiInputBase-input': { color: 'black', fontSize: 'calc(1rem + 0.8vw)' } }} placeholder="Your Name" variant="outlined" fullWidth value={fromValues.from_name} onChange={handleChange} name="from_name" required />

            </Box>


            <Box>
              <Typography className='conctN'>
                Your Email Address
              </Typography>
              <TextField sx={{ '& .MuiInputLabel-root': {}, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&:hover fieldset': { borderColor: 'rgb(13, 21, 95)' }, '&.Mui-focused fieldset': { borderColor: 'rgb(13, 21, 95)' } }, backgroundColor: '#8b9eb7', '& .MuiInputBase-input': { color: 'black', fontSize: 'calc(1rem + 0.8vw)' } }} placeholder="Your Email Address" variant="outlined" fullWidth type="email" value={fromValues.from_email} onChange={handleChange} name="from_email" required />

            </Box>


            <Box>
              <Typography className='conctN'>
                Your Message
              </Typography>
              <textarea value={fromValues.message} onChange={handleChange} name="message" required className="form-control f1" placeholder="Type Here" id="floatingTextarea2" ></textarea>
            </Box>


            <Box>
              <Button type="submit" backgroundcolor="primary" variant="contained" sx={{ maxWidth: 'auto', justifyContent: 'center', padding: '1em', fontSize: 'calc(1rem + 0.8vw)' }}>
                Submit
              </Button>
            </Box>


          </Box>

        </Container>

      </Box>


      <Box>
        <ToastContainer style={{ marginTop: '3.5%',fontSize:'calc(1rem + 1vw)',width:'auto' }} position="top-center" theme="dark" autoClose={2500} />
      </Box>



      <Box sx={{ padding: '2em', justifyContent: 'center', textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
        <Typography sx={{ fontFamily: 'monospace', fontSize: 'calc(1rem + 0.7vw)' }}>2024 Faraz Naqvi. All rights reserved.</Typography>
      </Box>


    </>
  )
}
