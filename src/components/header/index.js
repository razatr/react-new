import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core'
import { NavLink, Route } from 'react-router-dom'
import MobileMenu from './mobile-menu'
import DesktopMenu from './desktop-menu'
import ButtonBack from './button-back'
import AppMenu from './app-menu'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'block'
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

    return (
        <div className={ classes.grow }>
            <AppBar position="static">
                <Toolbar>
                    <Route path={ '/order-list/' } render={ () => (<ButtonBack className={ classes.menuButton } />) } />
                    <Route path={ '/restaurants/:id' } children={ ({ match }) => {
                        if (match)
                            return match.params.id ? <ButtonBack className={ classes.menuButton } /> : null
                    } } />
                    <Route exact
                           path={ '/restaurants/' }
                           render={ () => (<AppMenu className={ classes.menuButton } />) } />
                    <NavLink to={ '/restaurants' }>
                        <Typography className={ classes.title } variant="h6" noWrap>
                            Rest-Delivery
                        </Typography>
                    </NavLink>
                    <div className={ classes.grow } />
                    <div className={ classes.sectionDesktop }>
                        <DesktopMenu />
                    </div>
                    <div className={ classes.sectionMobile }>
                        <MobileMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderMenu
