import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    MenuItem,
    Menu
} from '@material-ui/core'
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    AccountCircle,
    MoreVert as MoreIcon
} from '@material-ui/icons'
import CartBadge from '../cart-bage'
import AccountList from './accounts-list'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${ theme.spacing(4) }px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}))

function HeaderMenu() {
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

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu anchorEl={ anchorEl }
              anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
              id={ menuId }
              keepMounted
              transformOrigin={ { vertical: 'top', horizontal: 'right' } }
              open={ isMenuOpen }
              onClose={ handleMenuClose }>
            <AccountList />
        </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu anchorEl={ mobileMoreAnchorEl }
              anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
              id={ mobileMenuId }
              keepMounted
              transformOrigin={ { vertical: 'top', horizontal: 'right' } }
              open={ isMobileMenuOpen }
              onClose={ handleMobileMenuClose }>
            <MenuItem>
                <CartBadge />
                <p>Cart Badge</p>
            </MenuItem>
            <MenuItem onClick={ handleProfileMenuOpen }>
                <IconButton aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )

    return (
        <div className={ classes.grow }>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={ classes.title } variant="h6" noWrap>
                        Rest-Delivery
                    </Typography>
                    <div className={ classes.search }>
                        <div className={ classes.searchIcon }>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search…" classes={ {
                            root: classes.inputRoot,
                            input: classes.inputInput
                        } } inputProps={ { 'aria-label': 'search' } } />
                    </div>
                    <div className={ classes.grow } />
                    <div className={ classes.sectionDesktop }>
                        <CartBadge />
                        <IconButton edge="end"
                                    aria-label="account of current user"
                                    aria-controls={ menuId }
                                    aria-haspopup="true"
                                    onClick={ handleProfileMenuOpen }
                                    color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={ classes.sectionMobile }>
                        <IconButton aria-label="show more"
                                    aria-controls={ mobileMenuId }
                                    aria-haspopup="true"
                                    onClick={ handleMobileMenuOpen }
                                    color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            { renderMobileMenu }
            { renderMenu }
        </div>
    )
}

export default HeaderMenu
