import { combineReducers } from 'redux'
import cartReducer from './cart'
import restaurantsReducer from './restaurants'
import dishesReducer from './dishes'
import reviewsReducer from './reviews'
import usersReducer from './users'
import accountReducer from './account'

export default combineReducers({
    restaurants: restaurantsReducer,
    cart: cartReducer,
    dishes: dishesReducer,
    reviews: reviewsReducer,
    users: usersReducer,
    account: accountReducer,
})
