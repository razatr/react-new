import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { restaurantsLoadedSelector, restaurantsSelector, reviewsLoadedSelector } from '../selectors'
import RestaurantCard from './restaurant-card'
import { loadRestaurant, loadReviews } from '../AC'
import Loader from './loader'

const useStyles = makeStyles((theme) => ({
    dynamicWrapper: {
        paddingLeft: theme.spacing(3),
        boxSizing: 'border-box',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(120),
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    restaurantLink: {
        display: 'block',
        flexGrow: '1'
    }
}))

function RestaurantList(props) {
    const {
        loadRestaurant,
        loadReviews,
        restaurantsLoaded,
        reviewsLoaded
    } = props

    useEffect(() => {
        loadRestaurant()
        loadReviews()
    })

    const { restaurants } = props

    const classes = useStyles()

    return (restaurantsLoaded && reviewsLoaded ? (
        <div className={ classes.dynamicWrapper }>
            { (restaurants.map((restaurant) => (
                <NavLink className={ classes.restaurantLink }
                    key={ restaurant.id }
                    to={ `/restaurants/${ restaurant.id }` }>
                    <RestaurantCard key={ restaurant.id }
                        { ...restaurant } />
                </NavLink>
            ))
            ) }
        </div>
    ) : <Loader />)
}

export default connect((state) => ({
    restaurants: restaurantsSelector(state),
    restaurantsLoaded: restaurantsLoadedSelector(state),
    reviewsLoaded: reviewsLoadedSelector(state)
}), {
    loadRestaurant,
    loadReviews
})(RestaurantList)
