import React, { Fragment } from 'react'
import { NavLink, Route } from 'react-router-dom'
import RestaurantList from '../restaurant-list'
import Restaurant from '../restaurant'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3)
    }
}))

function RestaurantPage(props) {

    const classes = useStyles()

    return <Fragment>
        <Route path={ '/restaurants/:id' } render={ getRest } />
        <Route exact path={ '/restaurants/' } component={ RestaurantList } />
    </Fragment>
}

function getRest({ match }) {
    return <Fragment>
        <NavLink to={ '/restaurants/' }>
            <Button> { '< Back to restaurants' } </Button>
        </NavLink>
        <Restaurant id={ match.params.id } />
    </Fragment>
}

export default RestaurantPage