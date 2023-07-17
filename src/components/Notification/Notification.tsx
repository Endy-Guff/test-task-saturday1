import React from 'react';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../redux/store";
import {appActions} from "../../redux/appSlice";

export const Notification = () => {

        const notification = useSelector<AppRootStateType, string>(state=>state.app.notificationText)
        const dispatch = useAppDispatch()

        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }

            dispatch(appActions.setNotification({ notification: '' }))
        };

        return (
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={!!notification} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        {notification}
                    </Alert>
                </Snackbar>
            </Stack>
        );
};
