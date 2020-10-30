import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import {
    restaurantsSelector,
    restaurantsLoadingSelector,
    reviewsLoadingSelector,
    usersLoadingSelector,
    restaurantsLoadedSelector,
    reviewsLoadedSelector,
    usersLoadedSelector
} from './selectors'
import { loadRestaurants, loadReviews, loadUsers } from './AC'
import { CircularProgress, Grid } from '@material-ui/core'

function App(props) {

    const {
        loadRestaurants,
        loadUsers,
        loadReviews,
        restaurantsLoading,
        reviewsLoading,
        usersLoading,
        restaurantsLoaded,
        reviewsLoaded,
        usersLoaded
    } = props

    const loading = restaurantsLoading || reviewsLoading || usersLoading

    useEffect(() => {
        if (!usersLoaded && !usersLoading)
            loadUsers()
        if (!reviewsLoaded && !reviewsLoading)
            loadReviews()
        if (!restaurantsLoaded && !reviewsLoading && reviewsLoaded && usersLoaded)
            loadRestaurants()
    })

    return (
        <Fragment>
            { loading ? (
                <Grid container direction="row" justify="center" alignItems="center">
                    <CircularProgress style={ { margin: '30px' } } />
                </Grid>
            ) : (
                <Fragment>
                    <Header />
                    <RestaurantList restaurants={ props.restaurants } fetchData={ props.loadRestaurants } />
                    <UserForm />
                    <OrderList />
                </Fragment>
            ) }
        </Fragment>
    )
}

export default connect(state => ({
    restaurants: restaurantsSelector(state),
    restaurantsLoading: restaurantsLoadingSelector(state),
    reviewsLoading: reviewsLoadingSelector(state),
    usersLoading: usersLoadingSelector(state),
    restaurantsLoaded: restaurantsLoadedSelector(state),
    reviewsLoaded: reviewsLoadedSelector(state),
    usersLoaded: usersLoadedSelector(state)
}), {
    loadRestaurants,
    loadReviews,
    loadUsers
})(App)
