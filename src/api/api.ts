import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import 'firebase/compat/database'
import {ProductsInitialStateType} from "../redux/productsSlice";
import {firebaseConfig} from "../firebase-config";

firebase.initializeApp(firebaseConfig)

const products = firebase.database().ref('products')

export const api = {
    fetchProductsItem() {
        return products.once('value')
    }
}
