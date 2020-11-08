import React from 'react'
import { connect } from 'react-redux'
import { restaurantsSelector } from '../selectors'
import RestaurantCard from './restaurant-card'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    dynamicWrapper: {
        paddingLeft: theme.spacing(3),
        boxSizing: 'border-box',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(120),
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    restaurantLink: {
        display: 'block',
        flexGrow: '1'
    }
}))

function RestaurantList(props) {

    const { restaurants } = props

    const classes = useStyles()

    return <div className={ classes.dynamicWrapper }>
        { (restaurants.map(restaurant => (
                    <NavLink className={ classes.restaurantLink }
                             key={ restaurant.id }
                             to={ '/restaurants/' + restaurant.id }>
                        <RestaurantCard key={ restaurant.id }
                                        { ...restaurant } />
                    </NavLink>
                )
            )
        ) }
    </div>

}

export default connect((state) => ({
    restaurants: restaurantsSelector(state)
}))(RestaurantList)