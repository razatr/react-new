import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Container } from '@material-ui/core'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'

function App(props) {
    return (
        <Container>
            <Header/>
            <RestaurantList restaurants={props.restaurants}/>
            <UserForm/>
        </Container>
    )
}

export default connect(store => ({
    restaurants: store.restaurants
}))(App)
