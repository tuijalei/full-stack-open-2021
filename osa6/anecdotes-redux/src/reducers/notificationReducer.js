const initialState = null

const notificationReducer = (state = initialState, action) => {
    //console.log('state', state, 'with action', action.type)
    switch(action.type){
        case 'SET_NOTIF':
            return action.message
        case 'REMOVE_NOTIF':
            return initialState
        default:
            return state
    }
}

// == Action creator == //
let timeoutID

//Setting notification for particular secs and then remove it
//If buttons clicked more than once, clear previous timeout(s) and set new
export const setNotification = (message, time) => {
    return async dispatch => {      
        if(typeof timeoutID === 'number'){
             clearTimeout(timeoutID)
             timeoutID = null
        }

        timeoutID = setTimeout(() => {
            dispatch({ type: 'REMOVE_NOTIF' })
        }, (time*1000))

        dispatch({
            type: 'SET_NOTIF',
            message        
        })
    }
}

// =================== //

export default notificationReducer