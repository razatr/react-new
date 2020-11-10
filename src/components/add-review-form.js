import React, { useState } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { userSelector } from '../selectors'
import { addReview } from '../AC'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(20),
            alignSelf: 'center',
        },
    },
    title: {
        marginTop: theme.spacing(3),
    },
}))

function AddReviewForm(props) {
    const [ value, setValue ] = useState(0)
    const [ text, setText ] = useState('')

    const classes = useStyles()

    const { userId, username, addReview, restaurantId } = props

    return (
        <>
            <Typography variant="h6" className={classes.title}> Add review </Typography>
            <Typography>{ username }</Typography>
            <Rating name={restaurantId} value={value} onChange={(event, newValue) => setValue(newValue)} />
            <TextField
                value={text}
                label="Review"
                placeholder="Write what you think of us"
                multiline
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                className={classes.button}
                onClick={() => {
                    setValue(0)
                    setText('')
                    addReview(userId, text, value, restaurantId)
                }}
            >
                <Typography>Submit</Typography>
            </Button>
        </>
    )
}

const initMapStateToProps = () => (state) => {
    const user = userSelector(state, { id: state.account })
    return {
        username: user.name,
        userId: user.id,
    }
}

export default connect(initMapStateToProps, { addReview })(AddReviewForm)
