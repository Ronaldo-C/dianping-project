import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../redux/middleware/api'
import rootReducer from './modules'

let store

if(process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    store = createStore(rootReducer, componseEnhancers(applyMiddleware(thunk, api)))
} else {
    store = createStore(rootReducer, applyMiddleware(thunk, api))
}

export default store
