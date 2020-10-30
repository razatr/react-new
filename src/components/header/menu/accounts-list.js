import React from 'react'
import { connect } from 'react-redux'
import { MenuItem } from '@material-ui/core'
import { setCurrentUser } from '../../../AC'
import { usersSelector } from '../../../selectors'

function AccountList(props) {
    const { users, setCurrentUser } = props

    console.log('users - ', users)

    return users.map(user => (
        <MenuItem key={ user.id } onClick={ () => {
            setCurrentUser(user.id)
        } }>
            { user.name }
        </MenuItem>
    ))
}

export default connect(
    state => ({
        users: usersSelector(state)
    }),
    {
        setCurrentUser
    }
)(AccountList)
