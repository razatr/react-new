import React from 'react'
import { connect } from 'react-redux'
import { MenuItem } from '@material-ui/core'
import { setCurrentUser } from '../../../AC'

function AccountList(props) {
    const { users, setCurrentUser } = props
    return users.map(user => (
        <MenuItem
            key={user.id}
            onClick={() => {
                setCurrentUser(user.id)
            }}
        >
            {user.name}
        </MenuItem>
    ))
}

export default connect(
    state => ({
        users: state.users
    }),
    {
        setCurrentUser
    }
)(AccountList)
