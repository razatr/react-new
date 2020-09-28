import React, { Component } from 'react'
import Review from './review'

class Reviews extends Component {
    render() {
        const {reviews} = this.props
        return (
            <React.Fragment>
                {reviews.map(review =>(
                    <Review
                        key={review.id}
                        {...review}/>
                ))}
            </React.Fragment>
        )
    }
}

export default Reviews