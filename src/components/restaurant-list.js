import React, { useState, useEffect } from 'react'
import Restaurant from './restaurant'
import { connect } from 'react-redux'
import { restaurantsSelector, reviewsLoadedSelector } from '../selectors'

function RestaurantList(props) {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const { restaurants, fetchData } = props

    useEffect(() => {
        restaurants.length === 0 &&
        fetchData &&
        fetchData()
    })

    console.log('render r-list')

    return (
        restaurants.map(restaurant => (
                props.isReviewsLoaded ? (
                    <Restaurant key={ restaurant.id }
                                { ...restaurant } handleChange={ handleChange } expanded={ expanded } />
                ) : null
            )
        )
    )
}

export default connect((state) => ({
    restaurants: restaurantsSelector(state),
    isReviewsLoaded: reviewsLoadedSelector(state)
}))(RestaurantList)