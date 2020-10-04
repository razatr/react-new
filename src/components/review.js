import React from 'react'
import { Rating } from '@material-ui/lab'
import { Typography } from '@material-ui/core'

function Review(props) {
    const { user, text, rating } = props
    return (
        <div>
            <Typography variant='h6'>{user}</Typography>
            <Rating name="read-only" value={rating} readOnly precision={0.5}/><br/>
            <Typography>{text}</Typography>
        </div>
    )
}

export default Review