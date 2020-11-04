import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase
} from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { NavLink, Route } from 'react-router-dom'
import MobileMenu from './mobile-menu'
import DesktopMenu from './desktop-menu'
import ButtonBack from './button-back'

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

    return (
        <div className={ classes.grow }>
            <AppBar position="static">
                <Toolbar>
                    {/*<AppMenu className={ classes.menuButton } />*/ }
                    <Route path={ '/order-list/' } render={ () => (<ButtonBack className={ classes.menuButton } />) } />
                    <Route path={ '/restaurants/:id' } render={ ({ match }) => {
                        return match.params.id ? <ButtonBack className={ classes.menuButton } /> : null
                    } } />
                    <NavLink to={ '/restaurants' }>
                        <Typography className={ classes.title } variant="h6" noWrap>
                            Rest-Delivery
                        </Typography>
                    </NavLink>
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
