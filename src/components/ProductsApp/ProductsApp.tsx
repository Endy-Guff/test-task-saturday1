import React from 'react';
import {Routes, Route, NavLink, Navigate, useLocation} from "react-router-dom";
import Container from "@mui/material/Container";
import {ProductsList} from "./ProductsList/ProductsList";
import {Cart} from "./Cart/Cart";
import {Header} from "./Header";

export const ProductsApp = () => {
    return (
        <div className="App">
            <Header />
            <Container fixed>
                <Routes>
                    <Route path={'/productList'} element={<ProductsList/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/'} element={<Navigate to={'/productList'}/>}/>
                    <Route path={'*'} element={<div>404</div>}/>
                </Routes>
            </Container>
        </div>
    );
};

