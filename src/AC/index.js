import {
    INCREMENT,
    DECREMENT,
    ADD_REVIEW,
    ADD_TO_CART,
    DELETE_CART,
    REMOVE_FROM_CART,
    SET_CURRENT_USER,
    LOAD_RESTAURANTS,
    LOAD_DISHES,
    LOAD_REVIEWS,
    LOAD_USERS
} from '../constants'

export const increase = () => ({
    type: INCREMENT
})

export const decrease = () => ({
    type: DECREMENT
})

export const increaseCart = id => ({
    type: ADD_TO_CART,
    payload: {
        id
    }
})

export const decreaseCart = id => ({
    type: REMOVE_FROM_CART,
    payload: {
        id
    }
})

export const deleteCart = id => ({
    type: DELETE_CART,
    payload: {
        id
    }
})

export const addReview = (userId, text, rating, restaurantId) => ({
    type: ADD_REVIEW,
    payload: {
        userId,
        text,
        rating,
        restaurantId
    },
    generateId: true
})

export const setCurrentUser = id => ({
    type: SET_CURRENT_USER,
    payload: {
        id
    }
})

export const loadRestaurants = () => ({
    type: LOAD_RESTAURANTS,
    callAPI: "http://192.168.1.198:3001/api/restaurants"
})

export const loadDishes = () => ({
    type: LOAD_DISHES,
    callAPI: "http://192.168.1.198:3001/api/dishes"
})

export const loadReviews = () => ({
    type: LOAD_REVIEWS,
    callAPI: "http://192.168.1.198:3001/api/reviews"
})

export const loadUsers = () => ({
    type: LOAD_USERS,
    callAPI: "http://192.168.1.198:3001/api/users"
})
