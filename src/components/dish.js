import React from 'react'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart } from '../AC'
import { Typography, Grid, IconButton } from '@material-ui/core'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'

function Dish(props) {
    const { id, amount, increase, decrease } = props
    return (
        <div>
            <Grid container justify='space-between'>
                <Typography display='block'>{props.name}</Typography>
                <Typography display='block'>{props.price}</Typography>
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

export default connect(
    (state, ownProps) => ({
        amount: state.cart[ownProps.id] || 0
    }),
    {
        increase: increaseCart,
        decrease: decreaseCart
    }
)(Dish)