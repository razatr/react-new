import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import CartBadge from '../cart-bage'
import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { rootPath } from '../../constants'

function DesktopMenu() {
    const menuId = 'primary-search-account-menu'

    return (<Fragment>
        <NavLink to={ `${ rootPath }order-list` }>
            <IconButton color="inherit">
                <CartBadge />
            </IconButton>
        </NavLink>
        <NavLink to={`${rootPath}user-form`}>
            <IconButton edge="end"
                        aria-label="account of current user"
                        aria-controls={ menuId }
                        aria-haspopup="true"
                        color="inherit">
                <AccountCircle />
            </IconButton>
        </NavLink>
    </Fragment>)
}

export default DesktopMenu