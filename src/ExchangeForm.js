import './App.css';
import React, {useState} from 'react';

function ExchangeForm({currencies}) {
  const [currencyTo, setCurrencyTo] = useState("")
  const [currencyFrom, setCurrencyFrom] = useState("")
  function handleSubmit(event){

  }
  function handleFromChange(){

  }
  function handleToChange(){

  }
  const currenciesSelect= currencies.map((currency)=> (
    <option key={currency.code} value={currency.code}>{currency.name}</option>
  ))
  // TODO: Add some custom styling 
  // TODO: Handle submit
  return (
    <div className="ExchangeForm">
     <form onSubmit={handleSubmit}>
      <select>
        {currenciesSelect}
      </select>
      <select>
        {currenciesSelect}
      </select>
     </form>
    </div>
  );
}

export default ExchangeForm;
