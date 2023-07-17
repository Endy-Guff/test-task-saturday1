import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../api/api";
import {createAppAsyncThunk} from "../utils/appAsyncThunk";
import {ProductsItemType} from "../types/productType";

const initialState: ProductsInitialStateType = {}

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(getProducts.fulfilled, (state, action)=>{
                return action.payload.products
            })
    }
})




const getProducts = createAppAsyncThunk<{products: ProductsInitialStateType}, void>('products/getProducts', async (args, thunkApi)=>{
    const {dispatch, rejectWithValue} = thunkApi
        try {
            const res = await api.fetchProductsItem()
            return {products: res.val()}
        }
        catch (e){
            return rejectWithValue(null)
        }
})


export const productsSlice = slice.reducer
export const productsActions = slice.actions
export const productsThunks = {getProducts}


// types

export type ProductsInitialStateType = {
    [key: string]: ProductsItemType
}

