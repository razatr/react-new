import { fromJS } from 'immutable'
import {
    ADD_REVIEW,
    LOAD_RESTAURANTS,
    LOAD_RESTAURANT,
    START, FAIL, SUCCESS
} from '../constants'

const initialState = {
    loading: false,
    loaded: false,
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

    case LOAD_RESTAURANT + SUCCESS:
        return restaurantsState
            .set('entities', restaurantsState.get('entities').push(fromJS(action.response)))
            .set('loading', false)

    case LOAD_RESTAURANTS + FAIL:
        return restaurantsState
            .set('loading', false)
            .set('loaded', false)
            .set('error', action.error)

    case ADD_REVIEW: {
        const { restaurantId } = action.payload
        const { randomId } = action
        const restIndex = restaurantsState.get('entities')
            .findKey((restaurant) => restaurant.get('id') === restaurantId)

        return restaurantsState.setIn([ 'entities', restIndex, 'reviews' ],
            restaurantsState.getIn([ 'entities', restIndex, 'reviews' ]).push(randomId))
    }
    default:
        return restaurantsState
    }
}
