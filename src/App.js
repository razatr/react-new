import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import './App.css'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import { restaurantsSelector, loadingSelector } from './selectors'
import { loadRestaurants } from './AC'

function App(props) {
    return (
        <Fragment>
            <Header/>
            {props.loading ? (
                <h1>Loading</h1>
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
    loading: loadingSelector(state)
}), {
    loadRestaurants
})(App)
