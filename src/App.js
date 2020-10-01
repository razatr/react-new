import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Container } from '@material-ui/core'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'

function App(props) {
    return (
        <React.Fragment>
            <Header/>
            <RestaurantList restaurants={props.restaurants}/>
            <UserForm/>
        </React.Fragment>
    )
}

export default connect(store => ({
    restaurants: store.restaurants
}))(App)
