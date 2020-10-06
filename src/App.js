import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'

function App(props) {
    return (
        <React.Fragment>
            <Header/>
            <RestaurantList restaurants={props.restaurants}/>
            <UserForm/>
            <OrderList/>
        </React.Fragment>
    )
}

export default connect(store => ({
    restaurants: store.restaurants.toJS()
}))(App)
