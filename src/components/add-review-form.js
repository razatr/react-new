import React, { useState, Fragment } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux'
import { userSelector } from '../selectors'
import { addReview } from '../AC'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    button: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(20),
            alignSelf: 'center'
        }
    }
}))

function AddReviewForm(props) {
    const [value, setValue] = useState(0)
    const [text, setText] = useState('')

    const classes = useStyles()

    const { userId, username, addReview, restaurantId } = props

    return (
        <Fragment>
            <Typography>{ username }</Typography>
            <Rating name={ restaurantId } value={ value } onChange={ (event, newValue) => setValue(newValue) } />
            <TextField value={ text }
                       label="Review"
                       placeholder="Write what you think of us"
                       multiline
                       onChange={ e => setText(e.target.value) } />
            <Button className={ classes.button } onClick={ () => {
                setValue(0)
                setText('')
                addReview(userId, text, value, restaurantId)
            } }>
                <Typography>Submit</Typography>
            </Button>
        </Fragment>
    )
}

const initMapStateToProps = () => {
    return state => {
        const user = userSelector(state, { id: state.account })
        return {
            username: user.name,
            userId: user.id
        }
    }
}

export default connect(initMapStateToProps, { addReview })(AddReviewForm)
