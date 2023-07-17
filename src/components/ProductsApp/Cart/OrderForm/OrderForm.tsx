import React from 'react';
import {CartItemType} from "../../../../redux/cartSlice";
import FormControl from "@mui/material/FormControl";
import {useFormik} from "formik";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

type OrderFormPropsType = {
    cartItems: CartItemType[]
    totalPrice: number
}

export const OrderForm: React.FC<OrderFormPropsType> = ({cartItems, totalPrice}) => {

    const formik = useFormik({
        validate:()=>{},
        initialValues:{
            name: '',
            surName: '',
            address: '',
            phone: ''
        },
        onSubmit: (values) => {
            const data = {personContacts: {...values}, products: {...cartItems}, totalPrice}
            alert(JSON.stringify(data))
        }
    })

        return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField type="name" label="name" margin="normal" {...formik.getFieldProps("name")} />
                        <TextField type="name" label="surname" margin="normal" {...formik.getFieldProps("surName")} />
                        <TextField type="address" label="address" margin="normal" {...formik.getFieldProps("address")} />
                        <TextField type="phone" label="phone" margin="normal" {...formik.getFieldProps("phone")} />

                        <Button
                            type={"submit"}
                            variant={"contained"}
                            disabled={!(formik.isValid && formik.dirty)}
                            color={"primary"}
                        >
                            Order
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </>
    );
};
