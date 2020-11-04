import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
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
import RestaurantPage from './components/routes/restaurantsPage'

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
        usersLoaded,

    } = props

    const loading = restaurantsLoading || reviewsLoading || usersLoading

    useEffect(() => {
        if (!usersLoaded && !usersLoading)
            loadUsers()
        if (!reviewsLoaded && !reviewsLoading)
            loadReviews()
        if (!restaurantsLoading && !restaurantsLoaded) {
            loadRestaurants()
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
                    <Route path={ '/restaurants' } component={ RestaurantPage } />
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
    restaurantsLoaded: restaurantsLoadedSelector(state),
    reviewsLoaded: reviewsLoadedSelector(state),
    usersLoaded: usersLoadedSelector(state),
}), {
    loadReviews,
    loadRestaurants,
    loadUsers,
})(App)
