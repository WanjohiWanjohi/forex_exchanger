import './App.css';
import ExchangeForm from './ExchangeForm'
import Box from '@mui/material/Box';

function Exchange({currencies}) {
  return (
    <div className="Exchange">
      <Box m={2} pt={3}>
        <ExchangeForm currencies={currencies}/>
      </Box>
    </div>
  );
}

export default Exchange;
