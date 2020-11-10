import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import CartBadge from '../cart-bage'

function DesktopMenu() {
    const menuId = 'primary-search-account-menu'

    return (
        <>
            <NavLink to="/order-list">
                <IconButton color="inherit">
                    <CartBadge />
                </IconButton>
            </NavLink>
            <NavLink to="/user-form">
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </NavLink>
        </>
    )
}

export default DesktopMenu
