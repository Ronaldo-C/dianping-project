import { combineReducers } from 'redux'
import entities from './entities'
import app from './app'
import detail from './detail'
import home from './home'
import search from './search'
import login from './login'
import user from './user'
import purchase from './purchase'

//合并根reducer
const rootReducer = combineReducers({
    entities,
    app,
    detail,
    home,
    search,
    login,
    user,
    purchase
})

export default rootReducer
