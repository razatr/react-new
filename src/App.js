import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import {
    restaurantsSelector,
    restaurantsLoadedSelector, reviewsLoadedSelector,
} from './selectors'
import { loadRestaurant, loadReviews } from './AC'
import { CircularProgress, Grid } from '@material-ui/core'
import RestaurantPage from './components/routes/restaurantsPage'

function App(props) {

    const {
        loadRestaurant,
        loadReviews,
        restaurantsLoaded,
        reviewsLoaded
    } = props

    useEffect(() => {
        if (!restaurantsLoaded)
            loadRestaurant()
        if (!reviewsLoaded)
            loadReviews()
    })

    return (
        <Fragment>
            { (!restaurantsLoaded || !reviewsLoaded) ? (
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
    restaurantsLoaded: restaurantsLoadedSelector(state),
    reviewsLoaded: reviewsLoadedSelector(state)
}), {
    loadRestaurant,
    loadReviews
})(App)
