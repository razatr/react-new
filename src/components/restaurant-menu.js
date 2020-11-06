import React, { useEffect, Fragment } from 'react'
import Dish from './dish'
import { connect } from 'react-redux'
import { loadDishes } from '../AC'
import { dishesLoadedSelector } from '../selectors'
import { CircularProgress } from '@material-ui/core'

function RestaurantMenu(props) {

    const { dishesLoaded, loadDishes, menu } = props

    useEffect(() => {
        if (!dishesLoaded) {
            loadDishes(menu)
        }
    })

    return (<Fragment>
        { !dishesLoaded ? (<CircularProgress style={ { margin: '30px' } } />) :
            (<div style={ { width: '100%' } }>
                { props.menu.map(dishId => (
                    <Dish key={ dishId } id={ dishId } />
                )) }
            </div>)
        }
    </Fragment>)
}

export default connect((state) => ({
    dishesLoaded: dishesLoadedSelector(state)
}), { loadDishes })(RestaurantMenu)