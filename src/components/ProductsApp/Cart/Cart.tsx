import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {ProductsItemType} from "../../../types/productType";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {CartItemType} from "../../../redux/cartSlice";
import {CartItem} from "./CartItem/CartItem";
import {OrderForm} from "./OrderForm/OrderForm";

export const Cart = () => {
    const cartItems = useSelector<AppRootStateType, CartItemType[]>(state => state.cart)
    const totalPrice = cartItems.length!==0?cartItems.map((el)=>el.price*el.count)
        .reduce((total, cur)=>total+=cur):0

    return (
        <>
            <Grid container spacing={3} style={{ padding: "20px" }}>
                <Grid container item xs={8} direction={'column'} spacing={3}>
                    {cartItems.length !== 0
                        ? cartItems.map(item => {
                            return (
                                <Grid item>
                                    <Paper style={{padding: '10px'}}>
                                        <CartItem item={item}/>
                                    </Paper>
                                </Grid>
                            )
                        })
                        : <div style={{marginTop: '100px'}}>корзина пуста</div>}
                </Grid>
                <Grid container item xs={4} direction={'column'}>
                    <Paper style={{padding: '10px'}}>
                        <OrderForm cartItems={cartItems} totalPrice={totalPrice} />
                    </Paper>
                </Grid>
                <Grid xs={2} marginTop={3}>
                    {totalPrice!==0&&<Typography variant={'h5'}>
                        TOTAL: {totalPrice}$
                    </Typography>}
                </Grid>
            </Grid>
        </>
    );
};
