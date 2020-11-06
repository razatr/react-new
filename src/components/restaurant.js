import React, { Fragment } from 'react'
import RestaurantMenu from './restaurant-menu'
import Reviews from './reviews'
import { Typography, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { restaurantSelector } from '../selectors'
import AddReviewForm from './add-review-form'
import RestaurantRating from './restaurant-rating'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3)
    }
}))

function Restaurant(props) {

    const classes = useStyles()

    const { name, menu, reviews, id } = props

    return (<Fragment>
        <div className={ classes.root }>
            <Grid container justify="space-between">
                <Typography variant="h6">{ name }</Typography>
                <RestaurantRating reviews={ reviews } />
            </Grid>
            <RestaurantMenu menu={ menu }/>
            <Reviews reviews={ reviews } restaurantId={ id } />
        </div>
    </Fragment>)
}

const initMapStateToProps = () => {
    return (state, ownProps) => ({
        ...restaurantSelector(state, ownProps)
    })
}

export default connect(initMapStateToProps)(Restaurant)
