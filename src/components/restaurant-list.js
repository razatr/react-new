import React, { Component } from 'react'
import Restaurant from './restaurant'

class RestaurantList extends Component {
    state = {
        OpenRestaurantMenuId: null
    }

    render() {
        const {
            restaurants,
            openItemId,
            toggleOpenItem
        } = this.props
        return (
                restaurants.map(restaurant => (
                        <Restaurant
                            key={restaurant.id}
                            {...restaurant}
                            isMenuOpen={openItemId === restaurant.id}
                            toggleOpenMenu={toggleOpenItem}
                        />
                    )
                )
        )
    }
}

export default RestaurantList