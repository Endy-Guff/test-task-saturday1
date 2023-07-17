import {CartInitialStateType} from "../redux/cartSlice";

export const saveState = (state: CartInitialStateType) => {
    localStorage.setItem('cart', JSON.stringify(state))
}