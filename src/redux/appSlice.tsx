import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'app',
    initialState:{
        notificationText: '' as string
    },
    reducers: {
        setNotification: (state, action:PayloadAction<{notification: string}>)=>{
            state.notificationText = action.payload.notification
        }
    },
})

export const appSlice = slice.reducer
export const appActions = slice.actions

export type AppInitialStateType = ReturnType<typeof slice.getInitialState>