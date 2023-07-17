import React, {useEffect} from 'react';
import './App.css';
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import 'firebase/compat/database'
import {ProductsApp} from "./components/ProductsApp/ProductsApp";
import {BrowserRouter} from "react-router-dom";
import {Notification} from "./components/Notification/Notification";
import {useAppDispatch} from "./redux/store";
import {cartActions} from "./redux/cartSlice";


function App() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(cartActions.loadLocalStorage())
    })

    return (
        <BrowserRouter>
                <Notification />
                <ProductsApp/>
        </BrowserRouter>

    );
}

export default App;
