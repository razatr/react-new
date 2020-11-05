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
    callAPI: 'http://localhost:3001/api/restaurants'
})

export const loadDishes = (restaurantId) => ({
    type: LOAD_DISHES,
    callAPI: restaurantId ? `http://localhost:3001/api/dishes?id=${ restaurantId }` : 'http://localhost:3001/api/dishes',
    payload: {
        id: restaurantId
    }
})

export const loadReviews = (restaurantId) => ({
    type: LOAD_REVIEWS,
    callAPI: restaurantId ? `http://localhost:3001/api/reviews?id=${ restaurantId }` : 'http://localhost:3001/api/reviews',
    payload: {
        id: restaurantId
    }
})

export const loadUsers = () => ({
    type: LOAD_USERS,
    callAPI: 'http://localhost:3001/api/users'
})
