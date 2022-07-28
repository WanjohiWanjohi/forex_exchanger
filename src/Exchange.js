import './App.css';
import ExchangeForm from './ExchangeForm'
import Box from '@mui/material/Box';
import React , {useState, useEffect} from 'react';
import NavBar from './NavBar'


function Exchange() {
  const [currencies, setCurrencies] = useState([])
   // TODO: Load in these currencies from db.json as options to the select from and select to

  useEffect(() => { 
    fetch("http://localhost:4000/currencies/")
    .then((res)=> res.json())
    .then((data) =>setCurrencies(data))
  }, []);
  function handleExchange(currencyTo, currencyFrom , amount){
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyFrom}&to_currency=${currencyTo}&apikey=4VSOMEM1WE8AZBAW`;

    fetch(url).then((res)=> res.json()).then((result)=> console.log(result))
  }
  return (
    <div className="Exchange" style={{height: '100vh'}}>
     
      <NavBar/>
      <Box m={2} pt={3} sx={{
        width: 1000}}>
        <ExchangeForm currencies={currencies} handleExchange={handleExchange}/>
      </Box>
    </div>
  );
}

export default Exchange;
