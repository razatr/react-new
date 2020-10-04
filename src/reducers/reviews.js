import { normalizedReviews } from '../fixtures'
import { ADD_REVIEW } from '../constants'

export default (reviewsState = normalizedReviews, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const newState = reviewsState.slice()
            const { userId, text, rating } = action.payload
            const { randomId } = action
            newState.push({
                id: randomId,
                userId,
                text,
                rating
            })
            console.log('new state', newState)
            return newState
        default:
            return reviewsState
    }
}