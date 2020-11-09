import React from 'react'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import RestaurantPage from './components/routes/restaurantsPage'

function App() {
    return < BrowserRouter>
        <Route exact path="/">
            <Redirect to="/restaurants" />
        </Route>
        <Header />
        <Route path={ '/restaurants' } component={ RestaurantPage } />
        <Route path={ '/user-form' } component={ UserForm } />
        <Route path={ '/order-list' } component={ OrderList } />
    </BrowserRouter>
}

export default App
