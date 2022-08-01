import './App.css';
import ExchangeForm from './ExchangeForm'
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import MyLineChart from './Line.js';

function Exchange() {
  const [currencyFrom,setCurrencyFrom] =useState("")
  let [currencyTo,setCurrencyTo] =useState("")
  const [currencies, setCurrencies] = useState([])
  // TODO: Load in these currencies from db.json as options to the select from and select to

  useEffect(() => {
    fetch("http://localhost:4000/currencies/")
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
  }, []);

  let exchangeRate = 0.0;
  function handleExchange(currencyTo, currencyFrom, amount) {
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyFrom}&to_currency=${currencyTo}&apikey=4VSOMEM1WE8AZBAW`;
    fetch(url).then((res) => res.json()).then((result) => {
      exchangeRate = result["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
    })
    return exchangeRate;
  }
  return (
    <div className="Exchange" style={{ height: '100vh' }}>
      <Grid container spacing={24}>
        <Grid item xs={18} sm={8}>
          <MyLineChart currencyFrom={currencyFrom} currencyTo={currencyTo}/>
        </Grid>

        <Grid item xs={6} sm={4}>
          <ExchangeForm currencies={currencies} handleExchange={handleExchange} />
        </Grid>
      </Grid>
    </div >
  );
}

export default Exchange;
