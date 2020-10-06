import React, { useState, useEffect } from 'react'
import Restaurant from './restaurant'

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

    return (
        restaurants.map(restaurant => (
                <Restaurant
                    key={restaurant.id}
                    {...restaurant}
                    handleChange={handleChange}
                    expanded={expanded}
                />
            )
        )
    )
}

export default RestaurantList