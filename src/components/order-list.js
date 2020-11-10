import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { deleteCart } from '../AC'
import { selectCurrentCart } from '../selectors'
import OrderItem from './order-item'

const useStyles = makeStyles((theme) => ({
    dynamicWrapper: {
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(120),
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    text: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(3)
    }
}))

function OrderList(props) {
    const classes = useStyles()

    const { cart: rows } = props

    return (
        <div className={ classes.dynamicWrapper }>
            { rows.map((item) => <OrderItem key={ item.id } { ...item } />) }
            { rows[0] ? (
                <Typography className={ classes.text } variant="h6"> Total cost:
                    { rows.reduce((sum, item) => sum + item.cost, 0) }
                </Typography>
            ) : null }
        </div>
    )
}

export default connect(
    (state) => ({
        cart: selectCurrentCart(state)
    }),
    {
        deleteCart
    }
)(OrderList)
