import React, { useEffect } from 'react'
import Dish from './dish'
import { connect } from 'react-redux'
import { loadDishes } from '../AC'

function RestaurantMenu(props) {

    const { loadDishes } = props

    /*useEffect(() => {
        if(!loaded)
            loadDishes()
    })*/

    return (
        <div style={{ width: '100%' }}>
            {props.menu.map(dishId => (
                <Dish key={dishId} id={dishId}/>
            ))}
        </div>
    )
}

export default connect(null, {
    loadDishes
})(RestaurantMenu)