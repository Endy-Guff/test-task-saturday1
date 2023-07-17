import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductsItemType} from "../types/productType";
import {appActions} from "./appSlice";
import {createAppAsyncThunk} from "../utils/appAsyncThunk";

const initialState: CartInitialStateType = []

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductCount: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.find(item => item.id === action.payload.id)
            if (item) {
                item.count += 1
            }
        },
        removeProductCount: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.find(item => item.id === action.payload.id)
            if (item) {
                item.count -= 1
            }
        },
        removeProduct: (state, action: PayloadAction<{ id: string }>) => {
            const itemIndex = state.findIndex(item=>item.id===action.payload.id)
            if (itemIndex!==-1){
                state.splice(itemIndex, 1)
            }
        },
        loadLocalStorage: ((state)=>{
            const data = localStorage.getItem('cart');
            return data ? JSON.parse(data) : [];
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProductToCart.fulfilled, (state, action) => {
                state.push(action.payload.item)
            })
    }
})

const addProductToCart = createAppAsyncThunk<{ item: CartItemType }, { item: ProductsItemType }>('app/addProductToCart', (args, thunkApi) => {
    const {dispatch, getState, rejectWithValue} = thunkApi
    const state = getState().cart

    const item = state.find(item => item.id === args.item.id)

    if (!item) {
        return {item: {...args.item, count: 1}}
    } else {
        dispatch(appActions.setNotification({notification: 'There is already this product in the cart'}))
        return rejectWithValue(null)
    }
})


export const cartSlice = slice.reducer
export const cartActions = slice.actions
export const cartThunks = {addProductToCart}

// types

export type CartInitialStateType = CartItemType[]
export type CartItemType = ProductsItemType & { count: number }