import React from 'react'
import { Card, CardContent, Typography, CardActions, IconButton, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart, deleteCart } from '../AC'

const useStyles = makeStyles(theme => ({
    root: {
        margin: `${ theme.spacing(2) }px ${ theme.spacing(3) }px`,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: theme.spacing(123)
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    descriptions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

function OrderItem(props) {

    const classes = useStyles()

    const { name, cost, count, increase, decrease, id, deleteCart, ingredients } = props
    console.log(ingredients)

    return <Card className={ classes.root }>
        <CardContent>
            <div className={ classes.title }>
                <Typography variant='h6'>{ name }</Typography>
            </div>
            <div className={ classes.descriptions }>
                <Typography> Count { count }</Typography>
                <Typography> Total cost { cost }</Typography>
            </div>
        </CardContent>
        <CardActions className={ classes.actions }>
            <IconButton onClick={ () => decrease(id) } size="small">
                <RemoveIcon />
            </IconButton>
            <Button onClick={()=> deleteCart(id)}>
                Delete
            </Button>
            <IconButton onClick={ () => increase(id) } size="small">
                <AddIcon />
            </IconButton>
        </CardActions>
    </Card>
}

export default connect(null, {
    increase: increaseCart,
    decrease: decreaseCart,
    deleteCart
})(OrderItem)