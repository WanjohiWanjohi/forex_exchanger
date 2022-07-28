import './App.css';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ExchangeResult from './ExchangeResult';

// TODO: Handle form validation

const ExchangeForm = ({ currencies , handleExchange}) => {
  const [currencyTo, setCurrencyTo] = useState({})
  const [currencyFrom, setCurrencyFrom] = useState({})
  const [currenciesFrom, setCurrenciesFrom] = useState([])
  const [amount, setAmount] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [exchangeRate,setExchangeRate] = useState(0)

  useEffect((currencies) => {
    setCurrenciesFrom(currencies)
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    let rate = handleExchange(currencyTo.value, currencyFrom.value, amount)
    console.log(exchangeRate)
    setExchangeRate(rate)
    console.log(exchangeRate)
    setIsSubmitted(true)
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
      <Grid container  spacing={2}  justifyContent='center'>
       <Grid item>
       {isSubmitted ?  <ExchangeResult exchangeRate={exchangeRate} amount={amount} currencyFrom={currencyFrom} currencyTo={currencyTo}/>:null}
       </Grid>
        <form onSubmit={handleSubmit}>
          <Grid item  xs={8}>
            <Box m={2} pt={3} sx={{
        width: 900}}>
              <TextField
                id="number"
                type="text"
                 pattern='[0-9]*\.?[0-9]*' 
                label="Amount"
                required
                onChange={handleAmountChange}
              />
            </Box>
          </Grid>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={4} justifyContent='center' >
              <label> Select currency to convert from :
                <Select required onChange={handleFromChange} options={currencies} />
              </label>
              </Grid>
              <Grid item xs={4} justifyContent='center' >

              <label> Select currency to convert to :
                <Select required onChange={handleToChange} options={currencies} />
              </label>
              </Grid>
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

  );
}

export default ExchangeForm;
