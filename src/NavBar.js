import './App.css';
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Item from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
function NavBar() {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const style = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        width: 240,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    };
    // TODO: Make a proper heading Navbar
    return (

        <div className="Navbar" >
            <CssBaseline />
            <Box sx={{ width: '20%' , height: '100%' }}>
                <Stack spacing={2}>
                        <Item button>
                            <NavLink to="/" style={style}> Home</NavLink>
                            <Divider />
                        </Item>
                        <Item button>
                            <NavLink to="/exchange" style={style}> Exchange</NavLink>
                        </Item>

                        <Item button>
                            <NavLink to="/historical_exchanges" style={style}>Historical Exchanges </NavLink>
                        </Item>

                        <Item button>
                            <NavLink to="/contact" style={style}> Contact</NavLink>
                        </Item>
                        <Item button>
                            <NavLink to="/login" style={style}> Login</NavLink>

                        </Item>
                </Stack>
            </Box>
        </div>

    );
}

export default NavBar;
