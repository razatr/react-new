import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RestaurantRating from './restaurant-rating'

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(3),
        height: theme.spacing(18),
        display: 'flex',
        flexDirection: 'column-reverse',
        maxWidth: theme.spacing(60),
        background: '#777777',
    },
    description: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: 'rgba(50, 50, 50, 0.4)',
        borderRadius: `0 0 ${ theme.spacing(1) / 2 }px ${ theme.spacing(1) / 2 }px`
    },
    fill: {
        borderRadius: `${ theme.spacing(1) / 2 }px ${ theme.spacing(1) / 2 }px 0 0`,
        transition: 'flex-grow 200ms ease-in',
        background: 'linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0.4))'
    },
    title: {
        color: 'white'
    }
}))

function RestaurantCard(props) {

    const classes = useStyles()

    const { name, reviews } = props

    const getFillElem = (element) => {
        return element.classList.contains(classes.card) ? element : getFillElem(element.parentElement)
    }

    const onCard = ev => {
        getFillElem(ev.target).lastChild.style.flexGrow = '1'
    }

    const leaveCard = ev => {
        getFillElem(ev.target).lastChild.style.flexGrow = '0'
    }

    return <Paper elevation={ 3 } className={ classes.card } onMouseOver={ onCard } onMouseOut={ leaveCard }>
        <div className={ classes.description }>
            <Typography className={ classes.title } variant="h6">{ name }</Typography>
            <RestaurantRating reviews={ reviews } />
        </div>
        <div className={ classes.fill } />
    </Paper>
}

export default RestaurantCard