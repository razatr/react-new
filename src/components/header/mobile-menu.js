import React, { useState, Fragment } from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import CartBadge from '../cart-bage'
import { AccountCircle, MoreVert as MoreIcon } from '@material-ui/icons'
import AccountList from './accounts-list'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    icon: {
        margin: theme.spacing(1)
    }
}))

function MobileMenu(props) {

    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const menuId = 'primary-search-account-menu'

    const renderMobileMenu = (
        <Menu anchorEl={ mobileMoreAnchorEl }
              anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
              id={ mobileMenuId }
              keepMounted
              transformOrigin={ { vertical: 'top', horizontal: 'right' } }
              open={ isMobileMenuOpen }
              onClose={ handleMobileMenuClose }>
            <NavLink to="/order-list">
                <MenuItem onClick={ handleMobileMenuClose }>
                    <CartBadge className={ classes.icon } />
                    <p>Cart Badge</p>
                </MenuItem>
            </NavLink>
            <MenuItem onClick={ handleProfileMenuOpen }>
                <AccountCircle className={ classes.icon } />
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )

    return (<Fragment>
        <IconButton aria-label="show more"
                    aria-controls={ mobileMenuId }
                    aria-haspopup="true"
                    onClick={ handleMobileMenuOpen }
                    color="inherit">
            <MoreIcon />
        </IconButton>
        { renderMobileMenu }
        <AccountList anchorEl={ anchorEl }
                     id={ menuId }
                     open={ isMenuOpen }
                     onClose={ handleMenuClose } />
    </Fragment>)
}

export default MobileMenu