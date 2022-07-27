import './App.css';
import Exchange from './Exchange';
import HistoricalExchanges from './HistoricalExchanges';
import NavBar from './NavBar';
import React , {useState, useEffect} from 'react';
import Login from './Login'
import Contact from './Contact'
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
    <Router> 
      <Routes>
      <Route exact path="/" element={<NavBar />}/>
      <Route exact path="/exchange" element={ <Exchange currencies={currencies}/>}/>
      <Route exact path="/historical_exchanges" element={<HistoricalExchanges/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/login" element={<Login/>}/>
    </Routes>
    
     </Router> 

    </div>
    </ThemeProvider>
  );
}

export default App;
