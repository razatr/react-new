import { normalizedReviews } from '../fixtures'
import { ADD_REVIEW } from '../constants'
import { fromJS } from 'immutable'

export default (reviewsState = fromJS(normalizedReviews), action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const { userId, text, rating } = action.payload
            const { randomId } = action

            return reviewsState.push(fromJS({
                id: randomId,
                userId,
                text,
                rating
            }))
        default:
            return reviewsState
    }
}