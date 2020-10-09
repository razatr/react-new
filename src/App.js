import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import { restaurantsSelector, restaurantsLoadingSelector } from './selectors'
import { loadRestaurants } from './AC'
import { CircularProgress, Grid } from '@material-ui/core'

function App(props) {
    return (
        <Fragment>
            <Header/>
            {props.loading ? (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <CircularProgress style={{margin: '30px'}}/>
                </Grid>
            ) : (
                <RestaurantList
                    restaurants={props.restaurants}
                    fetchData={props.loadRestaurants}
                />
            )}
            <UserForm/>
            <OrderList/>
        </Fragment>
    )
}

export default connect(state => ({
    restaurants: restaurantsSelector(state),
    loading: restaurantsLoadingSelector(state)
}), {
    loadRestaurants
})(App)
