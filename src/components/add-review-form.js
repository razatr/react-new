import React, { useState } from 'react'
import { Typography, TextField } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { connect } from 'react-redux'
import { createUserSelector } from '../selectors'

function AddReviewForm(props) {
    const [value, setValue] = useState(0)

    const { username } = props

    return (
        <React.Fragment>
            <Typography>{username}</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                precision={0.5}
            />
            <TextField
                label="Review"
                placeholder="Write what you think of us"
                multiline
            />
        </React.Fragment>
    )
}

const initMapStateToProps = () => {
    const userSelector = createUserSelector()

    return state => {
        return {
            username: userSelector(state, { userId: state.account }).name
        }
    }
}

export default connect(initMapStateToProps)(AddReviewForm)
