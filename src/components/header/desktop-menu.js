import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartBadge from '../cart-bage'
import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import AccountList from './accounts-list'

function DesktopMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null)

    const isMenuOpen = Boolean(anchorEl)

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const menuId = 'primary-search-account-menu'

    return (<Fragment>
        <NavLink to="/order-list">
            <CartBadge />
        </NavLink>
        <IconButton edge="end"
                    aria-label="account of current user"
                    aria-controls={ menuId }
                    aria-haspopup="true"
                    onClick={ handleProfileMenuOpen }
                    color="inherit">
            <AccountCircle />
        </IconButton>
        <AccountList anchorEl={ anchorEl } id={ menuId } open={ isMenuOpen } onClose={ handleMenuClose } />
    </Fragment>)
}

export default DesktopMenu