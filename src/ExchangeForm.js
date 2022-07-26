import './App.css';
import React, {useState} from 'react';
import Select from 'react-select'

const ExchangeForm =({currencies}) =>{
  const [currencyTo, setCurrencyTo] = useState("")
  const [currencyFrom, setCurrencyFrom] = useState("")
  function handleSubmit(event){

  }
  function handleFromChange(){

  }
  function handleToChange(){

  }
  
  // TODO: Add some custom styling 
  // TODO: Handle submit
  return (
    <div className="ExchangeForm">
     <form onSubmit={handleSubmit}>
      <Select options={currencies}/>
      
     </form>
    </div>
  );
}

export default ExchangeForm;
