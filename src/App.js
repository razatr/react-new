import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import RestaurantList from './components/restaurant-list'
import UserForm from './components/user-form'
import Header from './components/header'

function App(props) {
    return (
        <div className="App">
            <Header/>
            <RestaurantList restaurants={props.restaurants}/>
            <UserForm/>
        </div>
    )
}

export default connect(store => ({
    restaurants: store.restaurants
}))(App)
