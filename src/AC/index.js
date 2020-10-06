import {
    INCREMENT,
    DECREMENT,
    ADD_REVIEW,
    ADD_TO_CART,
    DELETE_CART,
    REMOVE_FROM_CART,
    SET_CURRENT_USER,
    LOAD_RESTAURANTS
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
    callAPI: "http://localhost:3001/api/restaurants"
})
