import { AppBar, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "#4F9D69" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <NavLink className="navbar-link" to="/">
                    <Typography >
                        Home
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography >
                        Products
                    </Typography>
                </NavLink>
                <AddShoppingCartIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;