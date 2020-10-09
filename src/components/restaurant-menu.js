import React, { useEffect } from 'react'
import Dish from './dish'
import { connect } from 'react-redux'
import { loadDishes } from '../AC'
import { dishesLoadingSelector } from '../selectors'
import { CircularProgress } from '@material-ui/core'

function RestaurantMenu(props) {

    const { loadDishes, loading, loaded } = props

    useEffect(() => {
        if(!loaded)
            loadDishes()
    })

    return (
        loading ? <CircularProgress/> : <div style={{ width: '100%' }}>
            {props.menu.map(dishId => (
                <Dish key={dishId} id={dishId}/>
            ))}
        </div>
    )
}

export default connect(state => ({
    loading: dishesLoadingSelector(state),
    loaded: state.dishes.get('loaded')
}), {
    loadDishes
})(RestaurantMenu)