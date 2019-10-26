import { combineReducers } from 'redux'
import comments from './comments'
import order from './order'
import products from './products'
import shops from './shops'

//合并根reducer
const rootReducer = combineReducers({
    comments,
    order,
    products,
    shops
})

export default rootReducer