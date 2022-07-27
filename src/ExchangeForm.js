import './App.css';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


const ExchangeForm = ({ currencies }) => {
  const [currencyTo, setCurrencyTo] = useState({})
  const [currencyFrom, setCurrencyFrom] = useState({})
  const [currenciesFrom, setCurrenciesFrom] = useState([])
  const [amount, setAmount] = useState(0)

  // TODO: Use useRef
  useEffect((currencies) => {
    setCurrenciesFrom(currencies)
  }, [])

  function handleSubmit(event) {
    console.log(currencyFrom)
    console.log(currencyTo)
  }

  function handleFromChange(currencyFrom) {
    setCurrencyFrom(currencyFrom)
  }

  function handleToChange(currencyTo) {
    setCurrencyTo(currencyTo)
  }
  function handleAmountChange(amt){
    setAmount(amt)
  }

  // TODO: Improve custom styling 
  // TODO: Handle submit
  // TODO: Handle first select change toupdate list of currencies
  return (
    <div>
      <NavBar/>
    <div className="ExchangeForm">
      <Grid container justifyContent="flex-end" item xs={-3}>
        <form onSubmit={handleSubmit}>
          <Grid item >
            <Box m={2} pt={3}>
              <TextField
                id="outlined-number"
                label="Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={amount}
                fullWidth 
                onChange={handleAmountChange}
              />
            </Box>
          </Grid>
          <Grid item >
            <Box m={2} pt={3}>
              <label> Select currency to convert from :
                <Select onChange={handleFromChange} options={currencies} />
              </label>
            </Box>
          </Grid>

          <Grid item >
            <Box m={2} pt={3}>
              <label> Select currency to convert to :
                <Select onChange={handleToChange} options={currencies} />
              </label>
            </Box>
          </Grid>
          <Grid item >
            <label>
              <Box m={2} pt={3}>
                <Button variant="contained" onClick={handleSubmit}>Exchange</Button>
              </Box>
            </label>
          </Grid>
        </form>
      </Grid>

    </div >
    </div>
  );
}

export default ExchangeForm;
