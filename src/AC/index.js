import {
    ADD_REVIEW,
    ADD_TO_CART,
    DELETE_CART,
    REMOVE_FROM_CART,
    SET_CURRENT_USER,
    LOAD_RESTAURANTS,
    LOAD_DISH,
    LOAD_REVIEWS,
    LOAD_USERS,
    SUCCESS, START
} from '../constants'

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

export const loadRestaurantsStart = () => ({
    type: LOAD_RESTAURANTS + START
})

export const loadRestaurantsSuccess = (data) => ({
    type: LOAD_RESTAURANTS + SUCCESS,
    response: data
})

export const loadReviewsStart = () => ({
    type: LOAD_REVIEWS + START
})

export const loadReviewsSuccess = (data) => ({
    type: LOAD_REVIEWS + SUCCESS,
    response: data
})

export const loadDishStart = () => ({
    type: LOAD_DISH + START
})

export const loadDishSuccess = (data) => {
    return ({
        type: LOAD_DISH + SUCCESS,
        response: data
    })
}

export const loadUserStart = () => ({
    type: LOAD_USERS + START
})

export const loadUserSuccess = (data) => {
    return ({
        type: LOAD_USERS + SUCCESS,
        response: data
    })
}

export const loadRestaurant = (arrId) => (dispatch, getState) => {
    const state = getState()

    if (!state.restaurants.get('loaded') && !state.restaurants.get('loading')) {
        dispatch(loadRestaurantsStart())
        const f = async () => {
            const response = await fetch(`http://localhost:3001/restaurants.json`)
            const data = await response.json()
            dispatch(loadRestaurantsSuccess(data))
        }
        f()
    }
}

export const loadReviews = (arrId) => (dispatch, getState) => {
    const state = getState()

    if (!state.reviews.get('loaded') && !state.reviews.get('loading')) {
        dispatch(loadReviewsStart())
        const f = async () => {
            const response = await fetch(`http://localhost:3001/reviews.json`)
            const data = await response.json()
            dispatch(loadReviewsSuccess(data))
        }
        f()
    }
}

export const loadDishes = (arrId) => (dispatch, getState) => {
    const state = getState()

    if (!state.dishes.get('loaded') && !state.dishes.get('loading')) {
        arrId.forEach((id) => {
            dispatch(loadDishStart(id))
            const f = async () => {
                const response = await fetch(`http://localhost:3001/dishes.json`)
                const data = await response.json()
                dispatch(loadDishSuccess(data.find((item) => (item.id === id))))
            }
            f()
        })
    }
}

export const loadUsers = (arrId) => (dispatch, getState) => {
    const state = getState()

    if (!state.users.get('loaded') && !state.users.get('loading')) {
        arrId.forEach((id) => {
            dispatch(loadUserStart(id))
            const f = async () => {
                const response = await fetch(`http://localhost:3001/users.json`)
                const data = await response.json()
                console.log(data, '---', id)
                dispatch(loadUserSuccess(data.find((item) => (item.id === id))))
            }
            f()
        })
    }
}
