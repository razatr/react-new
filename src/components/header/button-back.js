import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { ArrowBackIos as ArrowBackIosIcon } from '@material-ui/icons'

function ButtonBack(props) {

    const { className } = props

    return <NavLink to={ '/restaurants/' }>
        <IconButton edge="start" className={ className } color="inherit" aria-label="open drawer">
            <ArrowBackIosIcon />
        </IconButton>
    </NavLink>
}

export default ButtonBack