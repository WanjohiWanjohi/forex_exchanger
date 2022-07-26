import './App.css';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function ExchangeResult({exchangeRate, amount, currencyFrom, currencyTo}) {
  return (
    <div>
      <div className="Home">
        <CssBaseline />
        <Container maxWidth="sm">
          <Grid >
            <Box sx={{ width: '100%', maxWidth: 700 }} 
            >
              <Paper elevation={18} background-color="ffffff">
                  <h1>You should receive: {amount*exchangeRate } {currencyTo.value}</h1>
              </Paper>
            </Box>

          </Grid>
        </Container>
      </div>
    </div>

  );
}

export default ExchangeResult;
