import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import './navbar.css';
import CartWidget from '../cartWidget/cartWidget';

const Navbar = () => {

    return (<AppBar>
        <Toolbar className='navbar-app'>
            <h1 className='title'>
                USPS
            </h1>
            <div classname='nav'>
                <Button sx={{color: "black"}}>
                    Home
                </Button>  
                <Button sx={{color: "black"}}>
                    Products
                </Button> 
                <Button sx={{color:"black"}}>
                    Categories
                </Button>
                <CartWidget />
            </div>
        </Toolbar>
    </AppBar>);
}

export default Navbar;