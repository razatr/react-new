import React from 'react'
import { connect } from 'react-redux'
import { deleteCart } from '../AC'
import { selectCurrentCart } from '../selectors'
import OrderItem from './order-item'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    dynamicWrapper: {
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(120),
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap'
        }
    }
}))

function OrderList(props) {

    const classes = useStyles()

    const { cart: rows } = props

    return <div className={ classes.dynamicWrapper }>
        { rows.map((item) => <OrderItem key={ item.id } { ...item } />) }
    </div>
}

export default connect(
    state => ({
        cart: selectCurrentCart(state)
    }),
    {
        deleteCart
    }
)(OrderList)