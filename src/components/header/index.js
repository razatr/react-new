import React, { Component } from 'react'
import { withTheme } from '@material-ui/core/styles'
import HeaderMenu from './menu'

class Header extends Component {
    render() {
        return (
            <HeaderMenu/>
        )
    }
}

export default withTheme(Header)