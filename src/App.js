import logo from './logo.svg';
import './App.css';
import ExchangeForm from './ExchangeForm';
import HistoricalExchanges from './HistoricalExhanges';
import React , {useState, useEffect} from 'react';

function App() {
  const [currencies, setCurrencies] = useState([])
   // TODO: Load in these currencies from db.json as options to the select from and select to

  useEffect(() => { 
    fetch("http://localhost:4000/currencies/")
    .then((res)=> res.json()).then((data) =>console.log(data))
    // .then((data) =>setCurrencies[data])


  }, []);
  return (
    <div className="App">
     <ExchangeForm currencies={currencies}/>
     <HistoricalExchanges/>
    </div>
  );
}

export default App;
