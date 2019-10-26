import { combineReducers } from 'redux'
import entities from './entities'
import app from './app'
import detail from './detail'
import home from './home'

//合并根reducer
const rootReducer = combineReducers({
    entities,
    app,
    detail,
    home
})

export default rootReducer
