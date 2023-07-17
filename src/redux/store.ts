import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {productsSlice} from "./productsSlice";
import {useDispatch} from "react-redux";
import {cartSlice} from "./cartSlice";
import {appSlice} from "./appSlice";
import {saveState} from "../utils/localStorageUtils";


const rootReducer = combineReducers({
    products: productsSlice,
    cart: cartSlice,
    app: appSlice
})

export const store = configureStore({
    reducer: rootReducer
})

store.subscribe(()=>{
    saveState(store.getState().cart)
})

export const useAppDispatch: () => AppDispatch = useDispatch;

// types

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// @ts-ignore
window.store = store;


