import React, { useState } from 'react'
import Restaurant from './restaurant'
import { connect } from 'react-redux'
import { restaurantsSelector } from '../selectors'

function RestaurantList(props) {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const { restaurants } = props


    return (
        restaurants.map(restaurant => (
                <Restaurant key={ restaurant.id }
                            { ...restaurant } handleChange={ handleChange } expanded={ expanded } />
            )
        )
    )
}

export default connect((state) => ({
    restaurants: restaurantsSelector(state)
}))(RestaurantList)