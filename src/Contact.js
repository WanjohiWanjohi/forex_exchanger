import './App.css';
import Box from '@mui/material/Box';
import NavBar from './NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Contact() {
  return (
    <div>
      <NavBar/>
      <div className="Home">
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid direction="column">
          <Box sx={{ bgcolor: '#808080', height: '100vh' }} />

        </Grid>
      </Container>
    </div>
    </div>
 
  );
}

export default Contact;
