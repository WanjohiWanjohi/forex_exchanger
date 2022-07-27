import './App.css';
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

function NavBar() {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };
      const style = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        width:100,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      };
    // TODO: Make a proper heading Navbar
    return (
        
        <div className="Navbar" >
                  <CssBaseline />
            <Grid
                container
                direction="row" justifyContent="space-around">
                <List  style={flexContainer} component="nav" aria-label="mailbox folders">
                <ListItem button>
                        <NavLink to="/" style={style}> Home</NavLink>
                        <Divider />
                    </ListItem>
                    <ListItem button>
                        <NavLink to="/exchange" style={style}> Exchange</NavLink>
                    </ListItem>
                   
                    <ListItem button>
                            <NavLink to="/historical_exchanges" style={style}>Historical Exchanges </NavLink>
                    </ListItem>

                    <ListItem button>
                        <NavLink to="/contact" style={style}> Contact</NavLink>
                    </ListItem>
                    <ListItem button>
                        <NavLink to="/login" style={style}> Login</NavLink>
                    
                    </ListItem>
                </List>
            </Grid>
        </div>

    );
}

export default NavBar;
