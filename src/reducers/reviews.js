import { ADD_REVIEW, LOAD_REVIEWS, START, SUCCESS, FAIL } from '../constants'
import { fromJS } from 'immutable'

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    entities: []
}

export default (reviewsState = fromJS(initialState), action) => {
    switch (action.type) {

        case LOAD_REVIEWS + START:
            return reviewsState.set('loading', true)

        case LOAD_REVIEWS + SUCCESS:
            return reviewsState.set('loading', false)
                .set('loaded', true)
                .set('entities', fromJS(action.response))

        case LOAD_REVIEWS + FAIL:
            return reviewsState.set('error', action.error)

        case ADD_REVIEW:
            const { userId, text, rating } = action.payload
            const { randomId } = action

            return reviewsState.set('entities', reviewsState
                .get('entities')
                .push(fromJS({
                    id: randomId,
                    userId,
                    text,
                    rating
                }))
            )

        default:
            return reviewsState
    }
}