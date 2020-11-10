import React, { useState, Fragment } from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle, MoreVert as MoreIcon } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CartBadge from '../cart-bage'

const useStyles = makeStyles((theme) => ({
    icon: {
        margin: theme.spacing(1),
    },
}))

function MobileMenu() {
    const classes = useStyles()

    const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = useState(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile'

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <NavLink to="/order-list">
                <MenuItem onClick={handleMobileMenuClose}>
                    <CartBadge className={classes.icon} />
                    <p>Cart Badge</p>
                </MenuItem>
            </NavLink>
            <NavLink to="/user-form">
                <MenuItem>
                    <AccountCircle className={classes.icon} />
                    <p>Profile</p>
                </MenuItem>
            </NavLink>
        </Menu>
    )

    return (
        <>
            <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
            { renderMobileMenu }
        </>
    )
}

export default MobileMenu
