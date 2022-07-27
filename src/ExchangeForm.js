import './App.css';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';


const ExchangeForm = ({ currencies , handleExchange}) => {
  const [currencyTo, setCurrencyTo] = useState({})
  const [currencyFrom, setCurrencyFrom] = useState({})
  const [currenciesFrom, setCurrenciesFrom] = useState([])
  const [amount, setAmount] = useState(0)


  useEffect((currencies) => {
    setCurrenciesFrom(currencies)
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    handleExchange(currencyTo.value, currencyFrom.value, amount)
  }

  function handleFromChange(currencyFrom) {
    setCurrencyFrom(currencyFrom)
  }

  function handleToChange(currencyTo) {
    setCurrencyTo(currencyTo)
  }
  function handleAmountChange(event){
    var amt = event.target.value;
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
              <input
                id="number"
                type="text"
                 pattern='[0-9]*\.?[0-9]*' 
                label="Amount"
                required
                onChange={handleAmountChange}
              />
            </Box>
          </Grid>
          <Grid item >
            <Box m={2} pt={3}>
              <label> Select currency to convert from :
                <Select required onChange={handleFromChange} options={currencies} />
              </label>
            </Box>
          </Grid>

          <Grid item >
            <Box m={2} pt={3}>
              <label> Select currency to convert to :
                <Select required onChange={handleToChange} options={currencies} />
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
