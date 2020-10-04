import React from 'react'
import { Rating } from '@material-ui/lab'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { createReviewSelector } from '../selectors'

function Review(props) {
    const { user, rating, text } = props

    console.log('reviews props - ', props)

    return (
        <div>
            <Typography variant='h6'>{user}</Typography>
            <Rating name="read-only" value={rating} readOnly precision={0.5}/><br/>
            <Typography>{text}</Typography>
        </div>
    )
}

const initMapStateToProps = () => {
    const reviewSelector = createReviewSelector()

    return (state, ownProps) => ({
        ...reviewSelector(state, ownProps)
    })
}

export default connect(
    initMapStateToProps
)(Review)