import { normalizedRestaurants } from '../fixtures'
import { ADD_REVIEW } from '../constants'
import { fromJS } from 'immutable'

export default (restaurantsState = fromJS(normalizedRestaurants), action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const { restaurantId } = action.payload
            const { randomId } = action
            const restIndex = restaurantsState.findKey((restaurant) => restaurant.get('id') === restaurantId)

            return restaurantsState.setIn([restIndex, 'reviews'],
                restaurantsState.getIn([restIndex, 'reviews']).push(randomId))
        default:
            return restaurantsState
    }
};