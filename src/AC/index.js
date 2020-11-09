import {
    ADD_REVIEW,
    ADD_TO_CART,
    DELETE_CART,
    REMOVE_FROM_CART,
    SET_CURRENT_USER,
    LOAD_RESTAURANTS,
    LOAD_RESTAURANT,
    LOAD_DISH,
    LOAD_REVIEWS,
    LOAD_REVIEW,
    LOAD_USERS,
    SUCCESS, START,
    apiPath
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

export const loadRestaurantSuccess = (data) => ({
    type: LOAD_RESTAURANT + SUCCESS,
    response: data
})

export const loadReviewsStart = () => ({
    type: LOAD_REVIEWS + START
})

export const loadReviewsSuccess = (data) => ({
    type: LOAD_REVIEWS + SUCCESS,
    response: data
})

export const loadReviewSuccess = (data) => ({
    type: LOAD_REVIEW + SUCCESS,
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

export const loadRestaurant = (id) => (dispatch, getState) => {
    const state = getState()

    if (!state.restaurants.get('loaded') && !state.restaurants.get('loading') ) {
        dispatch(loadRestaurantsStart())
        const f = async () => {
            const response = await fetch(`${apiPath}restaurants.json`)
            const data = await response.json()
            if(id){
                dispatch(loadRestaurantSuccess(data.find(item => item.id === id)))
            }
            else{
                dispatch(loadRestaurantsSuccess(data))
            }
        }
        f()
    }
}

export const loadReviews = (arrId) => (dispatch, getState) => {
    const state = getState()

    if (!state.reviews.get('loaded') && !state.reviews.get('loading')) {
        dispatch(loadReviewsStart())
        const f = async () => {
            const response = await fetch(`${apiPath}reviews.json`)
            const data = await response.json()
            if(arrId){
                const dataForResponse = []
                arrId.forEach((id) => {
                    dataForResponse.push(data.find((item) => item.id === id))
                })
                dispatch(loadReviewSuccess(dataForResponse))
            }
            else{
                dispatch(loadReviewsSuccess(data))
            }
        }
        f()
    }
}

export const loadDishes = (id) => (dispatch) => {

    dispatch(loadDishStart())
    const f = async () => {
        const response = await fetch(`${ apiPath }dishes.json`)
        const data = await response.json()
        dispatch(loadDishSuccess(data.find((item) => (item.id === id))))
    }
    f()
}

export const loadUsers = (id) => (dispatch) => {

    dispatch(loadUserStart())
    const f = async () => {
        const response = await fetch(`${apiPath}users.json`)
        const data = await response.json()
        dispatch(loadUserSuccess(data.find((user) => (user.id === id))))
    }
    f()
}

