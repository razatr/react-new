import React from 'react'
import {
    Card, CardContent, Typography, CardActions, IconButton, Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart, deleteCart } from '../AC'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: `${theme.spacing(2)}px ${theme.spacing(3)}px 0 ${theme.spacing(3)}px`,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    cardContent: {
        paddingBottom: '0',
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
    description: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    counter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: theme.spacing(30),
    },
}))

function OrderItem(props) {
    const classes = useStyles()

    const {
        name, cost, count, increase, decrease, id, deleteCart,
    } = props

    return (
        <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
                <div className={classes.title}>
                    <Typography variant="h6">{ name }</Typography>
                </div>
                <div className={classes.description}>
                    <Typography>
                        {' '}
            Count
                        { count }
                    </Typography>
                    <Typography>
                        {' '}
            Cost
                        { cost }
                    </Typography>
                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <div className={classes.counter}>
                    <IconButton onClick={() => decrease(id)} size="small">
                        <RemoveIcon />
                    </IconButton>
                    <Button onClick={() => deleteCart(id)} size="small" color="secondary">
            Delete
                    </Button>
                    <IconButton onClick={() => increase(id)} size="small">
                        <AddIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    )
}

export default connect(null, {
    increase: increaseCart,
    decrease: decreaseCart,
    deleteCart,
})(OrderItem)
