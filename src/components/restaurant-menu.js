import React from 'react'
import { connect } from 'react-redux'
import Dish from './dish'
import { loadDishes } from '../AC'
import { dishesLoadedSelector } from '../selectors'

function RestaurantMenu(props) {
    const { menu } = props

    return (
        <div>
            { menu.map((dishId) => (
                <Dish key={ dishId } id={ dishId } />
            )) }
        </div>
    )
}

export default connect((state) => ({
    dishesLoaded: dishesLoadedSelector(state)
}), { loadDishes })(RestaurantMenu)
