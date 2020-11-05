import React, { Fragment } from 'react'
import Review from './review'
import { opener } from '../decorators/opener'

function Reviews(props) {
    const { reviews } = props

    return (
        <Fragment>
            { reviews.map(reviewId => (
                <Review key={ reviewId } id={ reviewId } />
            )) }
        </Fragment>
    )
}

export default opener(Reviews)