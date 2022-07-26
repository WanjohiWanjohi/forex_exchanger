import logo from './logo.svg';
import './App.css';
import ExchangeForm from './ExchangeForm';
import HistoricalExchanges from './HistoricalExhanges';
import React , {useState, useEffect} from 'react';

function App() {
   // TODO: Load in these currencies from db.json as options to the select from and select to

  useEffect(() => { }, []);
  return (
    <div className="App">
     <ExchangeForm/>
     <HistoricalExchanges/>
    </div>
  );
}

export default App;
