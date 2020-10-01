import React, { Component } from 'react'
import { withTheme } from '@material-ui/core/styles'
import PrimarySearchAppBar from './menu'

class Header extends Component {
    render() {
        return (
            <PrimarySearchAppBar/>
        )
    }
}

export default withTheme(Header)