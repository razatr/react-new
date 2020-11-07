import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart } from '../AC'
import { Typography, Grid, IconButton } from '@material-ui/core'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'
import { dishSelector } from '../selectors'
import { loadDishes } from '../AC'

function Dish(props) {
    const { id, amount, increase, decrease, dish, loadDishes } = props

    useEffect(() => {
        if (!dish)
            loadDishes(id)
    })

    return dish ?
        <Fragment>
            <Grid container justify='space-between'>
                <Typography display='block'>{ dish.name }</Typography>
                <Typography display='block'>{ dish.price }</Typography>
            </Grid>
            <IconButton onClick={ () => decrease(id) } size="small">
                <RemoveIcon />
            </IconButton>
            <Typography display='inline'>{ amount }</Typography>
            <IconButton onClick={ () => increase(id) } size="small">
                <AddIcon />
            </IconButton>
        </Fragment>
        : 'Loading'
}

const initMapStateToProps = () => {

    return (state, ownProps) => {
        return {
            amount: state.cart.toJS()[ownProps.id] || 0,
            dish: dishSelector(state, ownProps)
        }
    }
}

export default connect(
    initMapStateToProps,
    {
        increase: increaseCart,
        decrease: decreaseCart,
        loadDishes
    }
)(Dish)