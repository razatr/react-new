import React, { useEffect } from 'react'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux'
import { reviewSelector } from '../selectors'
import { loadReviews } from '../AC'
import Loader from './loader'

function RestaurantRating(props) {
    const { reviewsId, loadReviews, reviews } = props

    const isLoaded = (arr) => {
        let k = true

        arr.forEach((item) => {
            if (!item) { k = false }
        })
        return k
    }

    useEffect(() => {
        if (!isLoaded(reviews)) { loadReviews(reviewsId) }
    })

    const avgRate = () => {
        const { reviews } = props

        const avg = reviews.reduce((sum, rate) => sum + rate.rating, 0) / reviews.length
        return Math.round(2 * avg) / 2
    }

    return isLoaded(reviews) ? <Rating name="read-only" value={avgRate()} readOnly precision={0.5} /> : <Loader />
}

const initMapStateToProps = () => (state, ownProps) => ({
    reviews: ownProps.reviewsId.map((review) => reviewSelector(state, { id: review })),
})

export default connect(initMapStateToProps, { loadReviews })(RestaurantRating)
