import './App.css';
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
function NavBar() {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };
    // TODO: Make a proper heading Navbar
    return (
        <div className="Navbar" >
            <Grid
                container
                direction="row" justifyContent="space-around">
                <List  style={flexContainer} component="nav" aria-label="mailbox folders">
                <ListItem button>
                        <NavLink to="/"> Home</NavLink>
                        <Divider />
                    </ListItem>
                    <ListItem button>
                        <NavLink to="/exchange"> Exchange</NavLink>
                        <Divider />
                    </ListItem>
                   
                    <ListItem button>
                        <Divider>
                            <NavLink to="/historical_exchanges">  Historical Exchanges</NavLink>
                        </Divider>
                    </ListItem>

                    <ListItem button>
                        <NavLink to="/contact"> Contact</NavLink>
                    </ListItem>
                    <ListItem button>
                        <NavLink to="/login"> Login</NavLink>
                        <Divider />
                    </ListItem>
                </List>
            </Grid>
        </div>

    );
}

export default NavBar;
