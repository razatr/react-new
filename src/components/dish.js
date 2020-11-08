import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { increaseCart, decreaseCart } from '../AC'
import { Typography, Grid, IconButton, Card, CardContent, CardActions } from '@material-ui/core'
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons'
import { dishSelector } from '../selectors'
import { loadDishes } from '../AC'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: theme.spacing(2)
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 0
    },
    cardActions: {
        justifyContent: 'center'
    },
    counter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: theme.spacing(30)
    }
}))

function Dish(props) {
    const { id, amount, increase, decrease, dish, loadDishes } = props

    const classes = useStyles()

    useEffect(() => {
        if (!dish)
            loadDishes(id)
    })

    return dish ?
        <Card className={ classes.card }>
            <CardContent className={ classes.cardContent }>
                <Grid container justify='space-between'>
                    <Typography display='block'>{ dish.name }</Typography>
                    <Typography display='block'>{ dish.price }</Typography>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={ classes.counter }>
                    <IconButton onClick={ () => decrease(id) } size="small">
                        <RemoveIcon />
                    </IconButton>
                    <Typography display='inline'>{ amount }</Typography>
                    <IconButton onClick={ () => increase(id) } size="small">
                        <AddIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
        : 'Loading'
}

const initMapStateToProps = () => {

    return (state, ownProps) => {
        return {
            amount: state.cart.toJS()[ownProps.id] || 0,
            dish: dishSelector(state, ownProps)
        }
    }
}

export default connect(
    initMapStateToProps,
    {
        increase: increaseCart,
        decrease: decreaseCart,
        loadDishes
    }
)(Dish)