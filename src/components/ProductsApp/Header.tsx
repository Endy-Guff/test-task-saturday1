import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavLink, useLocation} from "react-router-dom";
import s from "./ProductsApp.module.css";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AppBar from "@mui/material/AppBar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ProductsItemType} from "../../types/productType";

export const Header = () => {

    const location = useLocation()
    const pageName = location.pathname === '/productList' ? 'Products' : location.pathname === '/cart' ? 'Cart' : 'Page not found'
    const cartItemQuantity = useSelector<AppRootStateType, ProductsItemType[]>(state=>state.cart)

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography align={'left'} variant="h6" component="div" sx={{flexGrow: 1}}>
                    {pageName}
                </Typography>
                {cartItemQuantity.length!==0&&<Typography align={'right'} variant="h6" component="div" marginRight={2} sx={{flexGrow: 1}}>
                    {cartItemQuantity.length}
                </Typography>}
                {location.pathname === '/productList'
                    ? <NavLink className={s.navLink} to={'/cart'}>
                        <Button variant="contained" color={'info'} startIcon={<ShoppingCartOutlinedIcon/>}>
                            Cart
                        </Button>
                    </NavLink>
                    : <NavLink className={s.navLink} to={'/productList'}>
                        <Button variant="contained" color={'info'} startIcon={<ListAltOutlinedIcon/>}>
                            Products
                        </Button>
                    </NavLink>
                }
            </Toolbar>
        </AppBar>
    );
};
