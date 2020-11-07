import { LOAD_USERS, START, SUCCESS, FAIL } from '../constants'
import { fromJS } from 'immutable'

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    entities: [{
        'id': 'd30a96e7-e97c-4cb5-920e-391d6c19d020',
        'name': 'Guest'
    }]
}

export default (usersState = fromJS(initialState), action) => {

    switch (action.type) {
        case LOAD_USERS + START:
            return usersState.set('loading', true)
                .set('loaded', false)

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
