import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RestaurantRating from './restaurant-rating'
import { apiPath } from '../config'

const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(3),
        height: theme.spacing(18),
        display: 'flex',
        flexDirection: 'column-reverse',
        background: '#777777',
        flexGrow: '1',
        [theme.breakpoints.up('sm')]: {
            minWidth: theme.spacing(38)
        },
        [theme.breakpoints.up('md')]: {
            minWidth: theme.spacing(55)
        }
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
    const { name, reviews, image } = props

    const onCard = (ev) => {
        ev.target.closest(`.${classes.card}`).lastChild.style.flexGrow = '1'
    }

    const leaveCard = (ev) => {
        ev.target.closest(`.${classes.card}`).lastChild.style.flexGrow = '0'
    }

    return (
        <Paper elevation={ 3 }
            className={ classes.card }
            onMouseOver={ onCard }
            onMouseOut={ leaveCard }
            style={ { background: `url(${ apiPath }img/${ image }) top/cover` } }>
            <div className={ classes.description }>
                <Typography className={ classes.title } variant="h6">{ name }</Typography>
                <RestaurantRating reviewsId={ reviews } />
            </div>
            <div className={ classes.fill } />
        </Paper>
    )
}

export default RestaurantCard
