import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

/*
* The resulting reducer calls every child reducer
* and gathers their results into a single state object.
*/
const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: notificationReducer,
    filter: filterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store