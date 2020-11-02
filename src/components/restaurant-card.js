import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(3),
        height: theme.spacing(18),
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        background: 'url(https://www.maggi.ru/data/images/recept/img640x500/recept_2720_58kc.jpg) bottom/cover',
        '&:hover': {
            background: 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4) ), url(https://www.maggi.ru/data/images/recept/img640x500/recept_2720_58kc.jpg) bottom/cover'
        }
    }
}))

function RestaurantCard(props) {

    const classes = useStyles()

    const { name } = props

    return <Paper elevation={ 3 } className={ classes.card }>
        <Typography variant="h6">{ name }</Typography>
    </Paper>
}

export default RestaurantCard