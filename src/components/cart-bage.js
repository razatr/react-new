import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ShoppingCartOutlined as ShoppingCartOutlinedIcon } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

function CartBadge(props) {

    const { className, amount } = props

    return (
        <Badge className={ className } badgeContent={ amount } color="secondary">
            <ShoppingCartOutlinedIcon />
        </Badge>
    )
}

CartBadge.propTypes = {
    amount: PropTypes.number.isRequired
}

export default connect(state => ({
    amount: Object.values(state.cart.toJS()).reduce((total, dishes) => total + dishes, 0)
}))(CartBadge)