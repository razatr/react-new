import { normalizedRestaurants } from '../fixtures'
import { ADD_REVIEW } from '../constants'

export default (restaurantsState = normalizedRestaurants, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const { restaurantId } = action.payload
            const { randomId } = action
            const newState = restaurantsState.slice()
            const newRest = { ...restaurantsState.find(rest => rest.id === restaurantId) }
            newRest.reviews.push(randomId)
            const newReviewsList = newRest.reviews.slice()

            console.log('new reviews', newReviewsList)

            newRest.reviews = newReviewsList
            newState[restaurantsState.findIndex(rest => rest.id === restaurantId)] = newRest
            return newState
        default:
            return restaurantsState
    }
};