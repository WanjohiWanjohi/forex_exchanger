import './App.css';
import Box from '@mui/material/Box';
import NavBar from './NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
function Contact() {
  return (
    <div>
      <NavBar/>
      <div className="Home">
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#808080', height: '10vh' }} />
      </Container>
    </div>
    </div>
 
  );
}

export default Contact;
