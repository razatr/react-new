import React, { useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import RestaurantMenu from './restaurant-menu'
import Reviews from './reviews'
import { restaurantSelector } from '../selectors'
import AddReviewForm from './add-review-form'
import RestaurantRating from './restaurant-rating'
import { loadRestaurant } from '../AC'
import Loader from './loader'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            width: '100%'
        }
    },
    dynamicWrapper: {
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(120),
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap'
        }
    }
}))

function Restaurant(props) {
    const classes = useStyles()

    const { restaurant, id, loadRestaurant } = props

    useEffect(() => {
        if (!restaurant) {
            loadRestaurant(id)
        }
    })

    return (restaurant
        ? (
            <div className={ classes.dynamicWrapper }>
                <div className={ classes.root }>
                    <Grid container justify="space-between">
                        <Typography variant="h6">{ restaurant.name }</Typography>
                        <RestaurantRating reviewsId={ restaurant.reviews } />
                    </Grid>
                    <RestaurantMenu menu={ restaurant.menu } />
                    <Reviews reviews={ restaurant.reviews } restaurantId={ id } />
                    <AddReviewForm restaurantId={ id } />
                </div>
            </div>
        ) : <Loader />
    )
}

const initMapStateToProps = () => (state, ownProps) => ({
    restaurant: restaurantSelector(state, ownProps)
})

export default connect(initMapStateToProps, {
    loadRestaurant
})(Restaurant)
