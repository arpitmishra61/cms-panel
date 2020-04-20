//create store is to build the store where states of different components can reside

//applyMiddleware is used to apply other middlewares like composeWithDevTools 
import { createStore, applyMiddleware } from 'redux'

//thunk is middleware which is used to call dispatch method in actions
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer"

//To check the status of redux store from chrome.
//composeWithDevTools is not required in production dont forget to remove the this middleware
import { composeWithDevTools } from "redux-devtools-extension"

let initialState = {}

//applyind middleware
const middleware = applyMiddleware(thunk)

//creating the store
const store = createStore(
    rootReducer, initialState,
    composeWithDevTools(middleware)
)
export default store
