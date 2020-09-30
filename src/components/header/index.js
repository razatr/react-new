import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

class Header extends Component {
    render() {
        return (
            <Grid container style={{ height: '50px' }}>
                <Grid className='menu' xs>
                </Grid>
                <Grid className='cart-badge' xs={1}>
                    <Button>
                        <ShoppingCartOutlinedIcon/>
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default withTheme(Header)