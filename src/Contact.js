import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Contact() {
  return (
    <div>
      <div className="Home">
        <CssBaseline />
        <Container maxWidth="sm">
          <Grid direction="column">
            <Box sx={{ width: '100%', maxWidth: 700 }} 
            >
              <Paper elevation={18} background-color="white">
              Reach out to us on 
              <div>
                admin@exchangeit.com
                </div>
              </Paper>
            </Box>

          </Grid>
        </Container>
      </div>
    </div>

  );
}

export default Contact;
