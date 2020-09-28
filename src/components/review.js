import React, { Component } from 'react'
import { Rate } from 'antd'

class Review extends Component {
    render() {
        const { user, text, rating} = this.props
        return (
            <div>
                <span>{user}</span>
                <Rate disabled allowHalf defaultValue={rating}/><br/>
                <span>{text}</span>
            </div>
        )
    }
}

export default Review