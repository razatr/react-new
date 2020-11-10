import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import RestaurantPage from './components/routes/restaurantsPage'
import { rootPath } from './config'

function App() {
    return (
        <BrowserRouter basename={ rootPath }>
            <Route exact path="/">
                <Redirect to="/restaurants" />
            </Route>
            <Header />
            <Route path="/restaurants" component={ RestaurantPage } />
            <Route path="/user-form" component={ UserForm } />
            <Route path="/order-list" component={ OrderList } />
        </BrowserRouter>
    )
}

export default App
