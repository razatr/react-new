import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { ArrowBackIos as ArrowBackIosIcon } from '@material-ui/icons'
import {rootPath} from '../../constants'

function ButtonBack(props) {

    const { className } = props

    return <NavLink to={ `${rootPath}restaurants/` }>
        <IconButton edge="start" className={ className } color="inherit" aria-label="open drawer">
            <ArrowBackIosIcon />
        </IconButton>
    </NavLink>
}

export default ButtonBack