import './App.css';
import ExchangeForm from './ExchangeForm';
import HistoricalExchanges from './HistoricalExhanges';
import NavBar from './NavBar';
import React , {useState, useEffect} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';


function App() {
  const [currencies, setCurrencies] = useState([])
   // TODO: Load in these currencies from db.json as options to the select from and select to

  useEffect(() => { 
    fetch("http://localhost:4000/currencies/")
    .then((res)=> res.json())
    .then((data) =>setCurrencies(data))
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
     <ExchangeForm currencies={currencies}/>
     <HistoricalExchanges/>
    </div>
    </ThemeProvider>
  );
}

export default App;
