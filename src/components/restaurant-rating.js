import React from 'react'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux'
import { reviewSelector } from '../selectors'

function RestaurantRating(props) {

    const avgRate = () => {
        const { reviewsRate } = props
        const avg =
            reviewsRate.reduce((sum, rate) => sum + rate, 0) / reviewsRate.length
        return Math.round(2 * avg) / 2
    }

    return <Rating name="read-only" value={ avgRate() } readOnly precision={ 0.5 } />
}

const initMapStateToProps = () => {
    return (state, ownProps) => {
        return {
            reviewsRate: ownProps.reviews.map(review => {
                return reviewSelector(state, { id: review }).rating
            })
        }
    }
}

export default connect(initMapStateToProps)(RestaurantRating)