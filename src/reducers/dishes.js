import { normalizedDishes } from '../fixtures'
import { fromJS } from 'immutable'
import { LOAD_DISHES, START, SUCCESS,FAIL } from '../constants'

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    entities: []
}

export default (dishesState = fromJS(initialState), action) => {
    switch (action.type){

        case LOAD_DISHES + START:
            return dishesState.set('loading', true)

        case LOAD_DISHES + SUCCESS:
            return dishesState.set('loading', false)
                .set('loaded', true)
                .set('entities', fromJS(action.response))

        case LOAD_DISHES + FAIL:
            return dishesState.set('loading', false)
                .set('loaded', false)
                .set('error', action.error)

        default:
            return dishesState
    }
}