import React, { useState } from 'react'
import Button from 'antd/lib/button'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart } from '../AC'

function Dish(props) {
    const { id, amount, increase, decrease } = props
    return (
        <div>
            <div className="dish-title">
                <span>{props.name}</span>
                <span style={{ float: 'right' }}>{props.price}</span>
            </div>
            <Button onClick={() => decrease(id)}
                    size="small"
                    type="primary"
                    shape="circle"
                    icon={<MinusOutlined/>}/>
            <span className="amount">{amount}</span>
            <Button onClick={() => increase(id)}
                    size="small"
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined/>}/>
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