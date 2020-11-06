import { LOAD_USERS, START, SUCCESS, FAIL } from '../constants'
import { fromJS } from 'immutable'

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    entities: []
}

export default (usersState = fromJS(initialState), action) => {

    switch (action.type) {
        case LOAD_USERS + START:
            return usersState.set('loading', true)

        case LOAD_USERS + SUCCESS:
            return usersState.set('loading', false)
                .set('loaded', true)
                .set('entities', usersState.get('entities').push(fromJS(action.response)))

        case LOAD_USERS + FAIL:
            return usersState.set('error', action.error)

        default:
            return usersState
    }
}