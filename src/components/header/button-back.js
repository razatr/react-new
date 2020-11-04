import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { ArrowBackIos as ArrowBackIosIcon } from '@material-ui/icons'

function ButtonBack(props) {

    const { className } = props

    return <NavLink to={ '/restaurants/' }>
        <IconButton className={ className } aria-haspopup="true" color="inherit">
            <ArrowBackIosIcon />
        </IconButton>
    </NavLink>
}

export default ButtonBack