import React from 'react'

import { connect } from 'react-redux'
import { deleteCart } from '../AC'
import { selectCurrentCart } from '../selectors'
import OrderItem from './order-item'

function OrderList(props) {

    const { cart: rows } = props

    return rows.map((item) => <OrderItem key={ item.id } { ...item } />)
}

export default connect(
    state => ({
        cart: selectCurrentCart(state)
    }),
    {
        deleteCart
    }
)(OrderList)