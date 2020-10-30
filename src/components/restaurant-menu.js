import React from 'react'
import Dish from './dish'

function RestaurantMenu(props) {

    return (
        <div style={ { width: '100%' } }>
            { props.menu.map(dishId => (
                <Dish key={ dishId } id={ dishId } />
            )) }
        </div>
    )
}

export default RestaurantMenu