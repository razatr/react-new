import React from 'react'
import RestaurantMenu from './restaurant-menu'
import Reviews from './reviews'
import { Typography, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { restaurantSelector } from '../selectors'
import AddReviewForm from './add-review-form'
import RestaurantRating from './restaurant-rating'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            width: '100%'
        }
    },
    dynamicWrapper: {
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(120),
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap'
        }
    }
}))

function Restaurant(props) {

    const classes = useStyles()

    const { name, menu, reviews, id } = props

    return (
        <div className={ classes.dynamicWrapper }>
            <div className={ classes.root }>
                <Grid container justify="space-between">
                    <Typography variant="h6">{ name }</Typography>
                    <RestaurantRating reviews={ reviews } />
                </Grid>
                <RestaurantMenu menu={ menu } />
                <Reviews reviews={ reviews } restaurantId={ id } />
                <AddReviewForm restaurantId={ id } />
            </div>
        </div>
    )
}

const initMapStateToProps = () => {
    return (state, ownProps) => ({
        ...restaurantSelector(state, ownProps)
    })
}

export default connect(initMapStateToProps)(Restaurant)
