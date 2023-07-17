import {appActions, AppInitialStateType, appSlice} from "./appSlice";


test('notification text should be added', ()=>{
    const startAppState: AppInitialStateType = {notificationText: ''}
    const newNotificationText = 'newNotificationText'

    const action = appActions.setNotification({ notification: newNotificationText})

    const endState = appSlice(startAppState, action)

    expect(endState.notificationText).not.toBe('')
    expect(endState.notificationText).toBe(newNotificationText)

})