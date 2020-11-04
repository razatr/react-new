import React from 'react'
import { connect } from 'react-redux'
import { restaurantsSelector } from '../selectors'
import RestaurantCard from './restaurant-card'
import { NavLink } from 'react-router-dom'

function RestaurantList(props) {

    const { restaurants } = props

    return (restaurants.map(restaurant => (
                <NavLink key={ restaurant.id } to={ '/restaurants/' + restaurant.id }>
                    <RestaurantCard key={ restaurant.id }
                                    { ...restaurant } />
                </NavLink>
            )
        )
    )
}

export default connect((state) => ({
    restaurants: restaurantsSelector(state)
}))(RestaurantList)