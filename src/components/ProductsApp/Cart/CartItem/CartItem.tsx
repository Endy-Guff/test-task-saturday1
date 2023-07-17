import React from 'react';
import {ProductsItemType} from "../../../../types/productType";
import {cartActions, CartItemType} from "../../../../redux/cartSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../../redux/store";

type CartItemPropsType = {
    item: CartItemType
}

export const CartItem: React.FC<CartItemPropsType> = ({item}) => {

    const dispatch = useAppDispatch()

    const addProductCountHandler = () => {
        dispatch(cartActions.addProductCount({id: item.id}))
    }

    const removeProductCountHandler = () => {
        if (item.count === 1) {
            dispatch(cartActions.removeProduct({id: item.id}))
        } else {
            dispatch(cartActions.removeProductCount({id: item.id}))
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <img src={item.imgUrl} alt="" style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={7}>
                    <Typography variant={'h5'} marginBottom={1} marginTop={1} textAlign={'start'}>
                        {item.title}
                    </Typography>
                    <Typography variant={'subtitle1'} marginBottom={1} textAlign={'start'}>
                        {item.desc}
                    </Typography>
                    <Typography variant={'body1'} marginBottom={1} textAlign={'end'}>
                        {item.price}$
                    </Typography>
                </Grid>
                <Grid container item xs={3} alignItems={'center'} justifyContent={'center'} spacing={2}>
                    <Button variant="outlined" size="small" onClick={removeProductCountHandler}>-</Button>
                    <div style={{padding: '10px'}}>{item.count}</div>
                    <Button variant="outlined" size="small" onClick={addProductCountHandler}>+</Button>
                </Grid>
            </Grid>
        </>
    );
};


