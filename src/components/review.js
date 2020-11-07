import React from 'react'
import { Rating } from '@material-ui/lab'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { reviewSelector } from '../selectors'
import UserName from './user-name'

function Review(props) {
    const { userId, rating, text } = props

    return (
        <div>
            <UserName id={ userId } />
            <Rating name="read-only" value={ rating } readOnly precision={ 0.5 } />
            <br />
            <Typography>{ text }</Typography>
        </div>
    )
}

const initMapStateToProps = () => {
    return (state, ownProps) => reviewSelector(state, ownProps)
}

export default connect(initMapStateToProps)(Review)
