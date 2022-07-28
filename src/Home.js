import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Home() {
  return (
    <div className="Home">
      <Box sx={{ width: '100%', maxWidth: 700}} justifyContent="start" alignItems="start"
  >
        <Typography variant="h1" component="aside" gutterBottom>
          Exchange It !
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          Get the best value for  your coin with Exchange It !
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      </Box>
      <Box sx={{ width: '100%', maxWidth: 700, bgcolor: '' , margin:8}}>
        
      </Box>
    </div>
  );
}

export default Home;
