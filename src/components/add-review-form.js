import React, { useState } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux'
import { createUserSelector } from '../selectors'
import { addReview } from '../AC'

function AddReviewForm(props) {
    const [value, setValue] = useState(0)
    const [text, setText] = useState('')

    const { userId, username, addReview, restaurantId } = props

    const changeRating = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <React.Fragment>
            <Typography>{username}</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={changeRating}
                precision={0.5}
            />
            <TextField
                label="Review"
                placeholder="Write what you think of us"
                multiline
                onChange={e => setText(e.target.value)}
            />
            <Button onClick={() => addReview(userId, text, value, restaurantId)}>
                <Typography>Submit</Typography>
            </Button>
        </React.Fragment>
    )
}

const initMapStateToProps = () => {
    const userSelector = createUserSelector()

    return state => {
        const user = userSelector(state, { userId: state.account })
        return {
            username: user.name,
            userId: user.id
        }
    }
}

export default connect(initMapStateToProps, { addReview })(AddReviewForm)
