import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ShoppingCartOutlined as ShoppingCartOutlinedIcon } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

function CartBadge(props) {
    return (
        <Badge badgeContent={props.amount} color="secondary">
            <ShoppingCartOutlinedIcon/>
        </Badge>
    )
}

CartBadge.propTypes = {
    amount: PropTypes.number.isRequired
}

export default connect(state => ({
    amount: Object.values(state.cart).reduce((total, dishes) => total + dishes, 0)
}))(CartBadge)