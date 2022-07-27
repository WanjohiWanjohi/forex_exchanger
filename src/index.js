import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import HistoricalExchanges from './HistoricalExchanges';
import Exchange from './ExchangeForm';
import Home from './Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
const container = document.getElementById("root")
const root = createRoot(container);
root.render( <React.StrictMode>
      <App /> 
        
  </React.StrictMode>);


