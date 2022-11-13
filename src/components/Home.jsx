import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {

  const [checked, setChecked] = useState(false);
  
  
  const showMessage = () => {
    setChecked(true)
  }

  const message = (
    <Box id='box'> 
      <Alert
      id='alert'
      icon={false}
        action={
          <IconButton
          id='icon-close'
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setChecked(false)
          }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        This page is being launched
      </Alert>
  </Box>
  );

  return (
    <div className='home'>
      <header className='header'>
        <Link id='home' className='link' to={'/'} >
            Home
        </Link>
        <Link className='link' to={'/Menu'} >
            Menu
        </Link>
        <Button className='btn-disabled' disabled>
          <p className='txt-btn-disabled'>About</p>
        </Button>
        <Button className='btn-disabled' disabled>
          <p className='txt-btn-disabled'>Blog</p>
        </Button>
        <Link className='link' to={''} onClick={showMessage}>
            Contact
        </Link>
      </header>
      <div className='txts-btn'>
        <p className='first-text'>
          A real Italian cafe
        </p>
        <div className='secound-text'>
          <p className='one-line'>Discover the</p>
          <p className='two-line'>taste of real</p>
          <p className='three-line'>coffee</p>
        </div>
        <Stack spacing={2} direction="row">
          <Button id='btn' variant="outlined">
            <p id='txt-btn'>MEET US</p>
          </Button>
        </Stack>
      </div>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {message}
      </Slide>
    </div>
  );
}
