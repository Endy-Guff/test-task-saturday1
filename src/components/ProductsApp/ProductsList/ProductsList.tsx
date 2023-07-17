import React, {useEffect, useRef} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {ListItem} from "./ListItem/ListItem";
import {ProductsInitialStateType, productsThunks} from "../../../redux/productsSlice";
import {AppRootStateType, useAppDispatch} from "../../../redux/store";
import {useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

export const ProductsList = () => {
    const products = useSelector<AppRootStateType, ProductsInitialStateType>(state => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(productsThunks.getProducts())
    }, [])

    return (
        <>
            <Grid container spacing={3} style={{ padding: "20px" }} >
                {Object.entries(products).map(([key, item]) => {
                    return (
                        <Grid item lg={3}>
                            <Paper style={{padding: '10px'}}>
                                <ListItem key={key} item={item}/>
                            </Paper>
                        </Grid>
                    )
                })
                }
            </Grid>
        </>
    );
};

