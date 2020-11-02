import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ShoppingCartOutlined as ShoppingCartOutlinedIcon } from '@material-ui/icons'
import { Badge, IconButton } from '@material-ui/core'

function CartBadge(props) {
    return (
        <IconButton color="inherit">
            <Badge badgeContent={ props.amount } color="secondary">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </IconButton>
    )
}

CartBadge.propTypes = {
    amount: PropTypes.number.isRequired
}

export default connect(state => ({
    amount: Object.values(state.cart.toJS()).reduce((total, dishes) => total + dishes, 0)
}))(CartBadge)