import React, { useEffect, Fragment } from 'react'
import Dish from './dish'
import { connect } from 'react-redux'
import { loadDishes } from '../AC'
import { dishesLoadingSelector, selectDishLoadedInRestaurant } from '../selectors'
import { CircularProgress } from '@material-ui/core'

function RestaurantMenu(props) {

    const { restaurantId, dishesLoaded, dishesLoading, loadDishes } = props

    useEffect(() => {
        if (!dishesLoading && !dishesLoaded) {
            loadDishes(restaurantId)
        }
    })

    return (<Fragment>
        { dishesLoading ? (<CircularProgress style={ { margin: '30px' } } />) :
            (<div style={ { width: '100%' } }>
                { props.menu.map(dishId => (
                    <Dish key={ dishId } id={ dishId } />
                )) }
            </div>)
        }
    </Fragment>)
}

export default connect((state, ownProps) => ({
    dishesLoaded: selectDishLoadedInRestaurant(state, { id: ownProps.restaurantId }),
    dishesLoading: dishesLoadingSelector(state)
}), { loadDishes })(RestaurantMenu)