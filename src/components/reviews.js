import React from 'react'
import Review from './review'
import { opener } from '../decorators/opener'

function Reviews(props) {
    const { reviews } = props

    return (
        <>
            { reviews.map((reviewId) => (
                <Review key={ reviewId } id={ reviewId } />
            )) }
        </>
    )
}

export default opener(Reviews)
