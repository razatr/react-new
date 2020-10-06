import {
    ADD_REVIEW,
    LOAD_RESTAURANTS,
    START, FAIL, SUCCESS
} from '../constants'
import { fromJS } from 'immutable'

const initialState = {
    loaded: false,
    loading: false,
    error: null,
    entities: []
}

export default (restaurantsState = fromJS(initialState), action) => {
    switch (action.type) {
        case LOAD_RESTAURANTS + START:
            return restaurantsState.set('loading', true)

        case LOAD_RESTAURANTS + SUCCESS:
            return restaurantsState
                .set('entities', fromJS(action.response))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_RESTAURANTS + FAIL:
            return restaurantsState
                .set('loading', false)
                .set('loaded', false)
                .set('error', action.error)

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