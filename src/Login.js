import './App.css';
import NavBar from './NavBar'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Login() {
  function handleSubmit(){

  }
  return (
    <div>
      <NavBar />
      <div className="ExchangeForm">
        <Grid container justifyContent="flex-end" item xs={-3}>
          <form onSubmit={handleSubmit}>
            <Grid item >
              <Box m={2} pt={3}>
                <TextField
                  id="email"
                  type="email"
                  pattern='[0-9]*\.?[0-9]*'
                  label="Email Address"
                  required
                  variant="filled"
                />
              </Box>
            </Grid>
            <Grid item >
              <Box m={2} pt={3}>
              <TextField
                  id="password"
                  type="password"
                  label="Password"
                  required  
                  variant="filled"               
                />
              </Box>
            </Grid>
            <Grid item >
                <Box m={2} pt={3}>
                  <Button variant="contained" onClick={handleSubmit}>Login</Button>
                </Box>
            </Grid>
          </form>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
