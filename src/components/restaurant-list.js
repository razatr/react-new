import React from 'react'
import Restaurant from './restaurant'

function RestaurantList(props) {
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const {
        restaurants
    } = props

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