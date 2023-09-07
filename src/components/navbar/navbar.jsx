import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './navbar.css';
import CartWidget from '../cartWidget/cartWidget';

const Navbar = () => {

    return (<AppBar>
        <Toolbar className='navbar-app' sx={{displya: "flex", justifyContent: "space-around"}}>
            <Typography sx={{color: "black"}}>
                USPS
            </Typography>
            <Button sx={{color: 'black'}}>
                Home
            </Button>  
            <Button sx={{color: 'black'}}>
                Products
            </Button> 
            <Button sx={{color: 'black'}}>
                Categories
            </Button>
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default Navbar;