import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import PrimarySearchAppBar from './menu'

class Header extends Component {
    render() {
        return (
                <PrimarySearchAppBar/>
        )
    }
}

export default withTheme(Header)