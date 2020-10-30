import React from 'react'
import RestaurantMenu from './restaurant-menu'
import Reviews from './reviews'
import {
    AccordionDetails,
    AccordionSummary,
    Accordion,
    Typography,
    Grid
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux'
import { createReviewSelector } from '../selectors'
import AddReviewForm from './add-review-form'
import { fromJS } from 'immutable'

function Restaurant(props) {
    const { name, menu, reviews, expanded, handleChange, id } = props

    const avgRate = () => {
        const { reviewsRate } = props
        const avg =
            reviewsRate.reduce((sum, rate) => sum + rate, 0) / reviewsRate.length
        return Math.round(2 * avg) / 2
    }

    console.log('render rest')

    return (
        <Accordion expanded={ expanded === id } onChange={ handleChange(id) }>
            <AccordionSummary>
                <Grid container justify="space-between">
                    <Typography variant="h6">{ name }</Typography>
                    <Rating name="read-only" value={ avgRate() } readOnly precision={ 0.5 } />
                </Grid>
            </AccordionSummary>
            <AccordionDetails style={ { flexDirection: 'column' } }>
                <RestaurantMenu menu={ menu } />
                <Reviews reviews={ reviews } />
                <AddReviewForm restaurantId={ id } />
            </AccordionDetails>
        </Accordion>
    )
}

const initMapStateToProps = () => {
    const reviewSelector = createReviewSelector()

    return (state, ownProps) => {
        return {
            reviewsRate: ownProps.reviews.map(review => {
                console.log('state---', fromJS(state).toJS())
                return reviewSelector(state, { id: review }).rating
            })
        }
    }
}

export default connect(initMapStateToProps)(Restaurant)
