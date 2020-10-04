import React from 'react'
import Review from './review'
import { opener } from '../decorators/opener'

function Reviews(props) {
        const { reviews } = props
        return (
            <React.Fragment>
                {reviews.map(review => (
                    <Review
                        key={review.id}
                        {...review}/>
                ))}
            </React.Fragment>
        )
}

export default opener(Reviews)