import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import RestaurantList from '../restaurant-list'
import Restaurant from '../restaurant'
import {rootPath} from '../../constants'

function RestaurantPage() {
    return <Fragment>
        <Route path={ `${rootPath}restaurants/:id` } render={ ({ match }) => (<Restaurant id={ match.params.id } />) } />
        <Route exact path={ `${rootPath}restaurants/` } component={ RestaurantList } />
    </Fragment>
}

export default RestaurantPage