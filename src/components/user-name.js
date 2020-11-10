import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { userSelector } from '../selectors'
import { loadUsers } from '../AC'
import Loader from './loader'

function UserName(props) {
    const { user, loadUsers, id } = props

    useEffect(() => {
        if (!user) {
            loadUsers(id)
        }
    })

    return user ? (<Typography variant="h6">{ user.name }</Typography>) : <Loader />
}

export default connect((state, ownProps) => ({ user: userSelector(state, ownProps) }),
    { loadUsers })(UserName)
