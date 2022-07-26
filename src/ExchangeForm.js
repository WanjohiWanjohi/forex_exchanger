import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function ExchangeForm() {
  const [currencyTo, setCurrencyTo] = useState("")
  const [currencyFrom, setCurrencyFrom] = useState("")
  function handleSubmit(event){

  }
  // TODO: Store available currencies in db.json
  // TODO: Add some custom styling 
  // TODO: Handle submit
  return (
    <div className="ExchangeForm">
     <form onSubmit={handleSubmit}>
      <select>
        <option value="1" disabled>1</option>
      </select>
      <select>
        <option value="1" disabled>1</option>
      </select>
     </form>
    </div>
  );
}

export default ExchangeForm;
