import React from 'react'
import { Rating } from '@material-ui/lab'
import { Typography, Card, CardContent } from '@material-ui/core'
import { connect } from 'react-redux'
import { reviewSelector } from '../selectors'
import UserName from './user-name'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: theme.spacing(2)
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

function Review(props) {
    const { userId, rating, text } = props

    const classes = useStyles()

    return (
        <Card className={ classes.card }>
            <CardContent className={ classes.cardContent }>
                <div className={ classes.cardHeader }>
                    <UserName id={ userId } />
                    <Rating name="read-only" value={ rating } readOnly precision={ 0.5 } />
                </div>
                <br />
                <Typography>{ text }</Typography>
            </CardContent>
        </Card>
    )
}

const initMapStateToProps = () => {
    return (state, ownProps) => reviewSelector(state, ownProps)
}

export default connect(initMapStateToProps)(Review)
