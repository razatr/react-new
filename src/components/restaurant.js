import React, { Fragment } from 'react'
import RestaurantMenu from './restaurant-menu'
import Reviews from './reviews'
import { Typography, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { createRestaurantSelector } from '../selectors'
import AddReviewForm from './add-review-form'
import RestaurantRating from './restaurant-rating'

function Restaurant(props) {

    const { name, menu, reviews, id } = props

    return (
        <Fragment>
            <Grid container justify="space-between">
                <Typography variant="h6">{ name }</Typography>
                <RestaurantRating reviews={ reviews } />
            </Grid>
            <RestaurantMenu menu={ menu } />
            <Reviews reviews={ reviews } />
            <AddReviewForm restaurantId={ id } />
        </Fragment>
    )
}

const initMapStateToProps = () => {
    const restaurantSelector = createRestaurantSelector()

    return (state, ownProps) => restaurantSelector(state, ownProps)
}

export default connect(initMapStateToProps)(Restaurant)
