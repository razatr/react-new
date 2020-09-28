import React, { Component } from 'react'
import { Rate } from 'antd'

class Review extends Component {
    render() {
        const { user, text, rating} = this.props
        return (
            <div>
                <h4>{user}</h4>
                <span>{text}</span>
                <Rate disabled allowHalf defaultValue={rating}/>
            </div>
        )
    }
}

export default Review