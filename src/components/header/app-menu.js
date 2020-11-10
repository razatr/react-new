import React from 'react'
import { IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'

function AppMenu(props) {
    const { className } = props

    return (
        <NavLink to="/restaurants">
            <IconButton edge="start" className={ className } color="inherit" aria-label="open drawer">
                <MenuIcon />
            </IconButton>
        </NavLink>
    )
}

export default AppMenu
