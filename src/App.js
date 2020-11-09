import React from 'react'
import UserForm from './components/user-form'
import Header from './components/header'
import OrderList from './components/order-list'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import RestaurantPage from './components/routes/restaurantsPage'
import { rootPath } from './constants'

function App() {
    return <BrowserRouter>
        <Route exact path={ `${ rootPath }` }>
            <Redirect to={ `${ rootPath }restaurants` } />
        </Route>
        <Header />
        <Route path={ `${ rootPath }restaurants` } component={ RestaurantPage } />
        <Route path={ `${ rootPath }user-form` } component={ UserForm } />
        <Route path={ `${ rootPath }order-list` } component={ OrderList } />
    </BrowserRouter>
}

export default App
