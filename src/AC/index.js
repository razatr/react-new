export const increase = () => ({
    type: 'INCREMENT'
})

export const decrease = () => ({
    type: 'DECREMENT'
})

export const increaseCart = id => ({
    type: 'ADD_TO_CART',
    payload: {
        id
    }
})

export const decreaseCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: {
        id
    }
})

export const deleteCart = id => ({
    type: 'DELETE_CART',
    payload: {
        id
    }
})

export const setCurrentUser = id => ({
    type: 'SET_CURRENT_USER',
    payload: {
        id
    }
})
