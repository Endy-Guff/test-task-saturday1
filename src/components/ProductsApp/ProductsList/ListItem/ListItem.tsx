import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {cartActions, cartThunks} from "../../../../redux/cartSlice";
import {useAppDispatch} from "../../../../redux/store";
import {ProductsItemType} from "../../../../types/productType";

type ListItemPropsType = {
    item: ProductsItemType
}

export const ListItem: React.FC<ListItemPropsType> = ({item}) => {

    const dispatch = useAppDispatch()

    const addToCart = ()=>{
        dispatch(cartThunks.addProductToCart({item}))
    }

    return (
        <div>
            <div>
                <img src={item.imgUrl} alt="" style={{width: '100%', height: '135px'}}/>
            </div>
            <Typography variant={'h5'} marginBottom={1} marginTop={1} textAlign={'start'}>
                {item.title}
            </Typography>
            <Typography variant={'subtitle1'} marginBottom={1} textAlign={'start'}>
                {item.desc}
            </Typography>
            <Typography variant={'body1'} marginBottom={1} textAlign={'end'}>
                {item.price}$
            </Typography>
            <Button variant={'contained'} fullWidth={true} onClick={addToCart}>
                Add to cart
            </Button>
        </div>
    );
};

