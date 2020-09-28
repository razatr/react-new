import React, { Component } from 'react'
import Restaurant from './restaurant'
import { accordion } from '../decorators/accordion'

class RestaurantList extends Component {
    state = {
        OpenRestaurantMenuId: null
    }

    render() {
        const {
            restaurants,
            openItemId,
            toggleOpenItem
        } = this.props;
        return (
            <div>
                {restaurants.map(restaurant => (
                        <Restaurant
                            key={restaurant.id}
                            {...restaurant}
                            isMenuOpen={openItemId === restaurant.id}
                            toggleOpenMenu={toggleOpenItem}
                        />
                    )
                )}
            </div>
        )
    }
}

export default accordion(RestaurantList)