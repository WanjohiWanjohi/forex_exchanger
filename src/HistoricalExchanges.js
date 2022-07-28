import './App.css';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';

function HistoricalExchanges() {
  // TODO: Use Effect instead
  useEffect(() => {
    const url = "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=4VSOMEM1WE8AZBAW"
    fetch(url)
      .then(response => response.json())
      .then((res) => console.log(res))
  }, [])
  return (
    <div className="HistoricalExchanges">
        <Box m={2} pt={3}>

        </Box>
    
    </div>
  );
}

export default HistoricalExchanges;
