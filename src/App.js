import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import {
    restaurantsSelector,
    restaurantsLoadingSelector,
    reviewsLoadingSelector,
    usersLoadingSelector,
    dishesLoadingSelector,
    restaurantsLoadedSelector,
    reviewsLoadedSelector,
    usersLoadedSelector,
    dishesLoadedSelector
} from './selectors'
import { loadRestaurants, loadReviews, loadUsers, loadDishes } from './AC'
import { CircularProgress, Grid } from '@material-ui/core'

function App(props) {

    const {
        loadRestaurants,
        loadUsers,
        loadReviews,
        loadDishes,
        restaurantsLoading,
        reviewsLoading,
        usersLoading,
        dishesLoading,
        restaurantsLoaded,
        reviewsLoaded,
        usersLoaded,
        dishesLoaded
    } = props

    const loading = restaurantsLoading || reviewsLoading || usersLoading || dishesLoading

    useEffect(() => {
        if (!usersLoaded && !usersLoading)
            loadUsers()
        if (!reviewsLoaded && !reviewsLoading)
            loadReviews()
        if (!restaurantsLoading && !restaurantsLoaded) {
            loadRestaurants()
        }
        if (!dishesLoading && !dishesLoaded) {
            loadDishes()
        }
    })

    return (
        <Fragment>
            { loading ? (
                <Grid container direction="row" justify="center" alignItems="center">
                    <CircularProgress style={ { margin: '30px' } } />
                </Grid>
            ) : (
                < BrowserRouter>
                    <Route exact path="/">
                        <Redirect to="/restaurants" />
                    </Route>
                    <Header />
                    <Route path={ '/restaurants' } component={ RestaurantList } />
                    <Route path={ '/user-form' } component={ UserForm } />
                    <Route path={ '/order-list' } component={ OrderList } />
                </BrowserRouter>

            ) }
        </Fragment>
    )
}

export default connect(state => ({
    restaurants: restaurantsSelector(state),
    restaurantsLoading: restaurantsLoadingSelector(state),
    reviewsLoading: reviewsLoadingSelector(state),
    usersLoading: usersLoadingSelector(state),
    dishesLoading: dishesLoadingSelector(state),
    restaurantsLoaded: restaurantsLoadedSelector(state),
    reviewsLoaded: reviewsLoadedSelector(state),
    usersLoaded: usersLoadedSelector(state),
    dishesLoaded: dishesLoadedSelector(state)
}), {
    loadReviews,
    loadRestaurants,
    loadUsers,
    loadDishes
})(App)
