import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_CART } from '../constants'
import { fromJS } from 'immutable'

export default (cartState = fromJS({}), action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { id } = action.payload
            const previousValue = cartState.get(id)
            return cartState.set(id, previousValue ? previousValue + 1 : 1)
        }

        case REMOVE_FROM_CART: {
            const { id } = action.payload

            if (cartState.get(id) === 1) {
                return cartState.delete(id)
            }
            else if (cartState.get(id)) {
                return cartState.set(id, cartState.get(id) - 1)
            }
            return cartState
        }

        case DELETE_CART: {
            const { id } = action.payload

            return cartState.delete(id)
        }

        default:
            return cartState
    }
};