import './App.css';
import ExchangeForm from './ExchangeForm'
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import MyLineChart from './Line.js';

function Exchange() {
  const [currencyFrom, setCurrencyFrom] = useState("")
  let [currencyTo, setCurrencyTo] = useState("")
  const [currencies, setCurrencies] = useState([])
  // TODO: Load in these currencies from db.json as options to the select from and select to

  useEffect(() => {
    fetch("https://mocki.io/v1/2daca649-918f-4bec-b969-2e9d03c4dd48", {
      mode: 'cors',
    }).then((res) =>  res.json())
    .then((re) => re.currencies)
    .then((data) => setCurrencies(data))
    .catch((error) => {
        console.error('Error:', error);
      })
  }, []);

  let exchangeRate = 0.0;
  function handleExchange(currencyTo, currencyFrom, amount) {
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyFrom}&to_currency=${currencyTo}&apikey=4VSOMEM1WE8AZBAW`;
    fetch(url, { mode: 'cors' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not OK');
        }
        res.json()
      }).then((result) => {
        exchangeRate = result["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      })
    return exchangeRate;
  }
  return (
    <div className="Exchange" style={{ height: '100vh' }}>
      <Grid container spacing={24}>
        <Grid item xs={18} sm={8}>
          <MyLineChart currencyFrom={currencyFrom} currencyTo={currencyTo} />
        </Grid>

        <Grid item xs={6} sm={4}>
          <ExchangeForm currencies={currencies} handleExchange={handleExchange} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Exchange;
