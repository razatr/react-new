import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import RestaurantList from '../restaurant-list'
import Restaurant from '../restaurant'

function RestaurantPage() {
    return <Fragment>
        <Route path={ `/restaurants/:id` } render={ ({ match }) => (<Restaurant id={ match.params.id } />) } />
        <Route exact path={ `/restaurants/` } component={ RestaurantList } />
    </Fragment>
}

export default RestaurantPage