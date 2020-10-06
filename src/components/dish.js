import React from 'react'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart } from '../AC'
import { Typography, Grid, IconButton } from '@material-ui/core'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'
import { createDishSelector } from '../selectors'

function Dish(props) {
    const { id, amount, increase, decrease, name, price } = props

    return (
        <div>
            <Grid container justify='space-between'>
                <Typography display='block'>{name}</Typography>
                <Typography display='block'>{price}</Typography>
            </Grid>
            <IconButton onClick={() => decrease(id)}
                        size="small">
                <RemoveIcon/>
            </IconButton>
            <Typography display='inline'>{amount}</Typography>
            <IconButton onClick={() => increase(id)}
                        size="small">
                <AddIcon/>
            </IconButton>
        </div>
    )
}

const initMapStateToProps = () => {
    const dishSelector = createDishSelector()

    return (state, ownProps) => {
        return {
            amount: state.cart.toJS()[ownProps.id] || 0,
            ...dishSelector(state, ownProps)
        }
    }
}

export default connect(
    initMapStateToProps
    ,
    {
        increase: increaseCart,
        decrease: decreaseCart
    }
)(Dish)