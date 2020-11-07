import { fromJS } from 'immutable'
import { LOAD_DISH, START, SUCCESS, FAIL } from '../constants'

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    entities: []
}

export default (dishesState = fromJS(initialState), action) => {
    switch (action.type) {

        case LOAD_DISH + START:
            return dishesState.set('loading', true)

        case LOAD_DISH + SUCCESS:
            return dishesState.set('loading', false)
                .set('loaded', true)
                .set('entities', dishesState.get('entities').push(fromJS(action.response)))

        case LOAD_DISH + FAIL:
            return dishesState.set('loading', false)
                .set('loaded', false)
                .set('error', action.error)

        default:
            return dishesState
    }
}
