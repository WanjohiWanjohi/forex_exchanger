import './App.css';
import Exchange from './Exchange';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavigationBar } from './NavigationBar';
import Home from './Home';
import React  from 'react';
import Login from './Login'
import Contact from './Contact'
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import theme from './theme';


function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">

    {
     <Router> 
      <NavigationBar/>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/exchange" element={ <Exchange />}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/drawer" element={<Login/>}/>
    </Routes>
     </Router>  }

    </div>
    </ThemeProvider>
  );
}

export default App;
