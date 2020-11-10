import React from 'react'
import { connect } from 'react-redux'
import { Menu, MenuItem } from '@material-ui/core'
import { setCurrentUser } from '../../AC'
import { usersSelector } from '../../selectors'

function AccountList(props) {
    const {
        users, setCurrentUser, anchorEl, id, open, onClose
    } = props

    return (
        <Menu anchorEl={ anchorEl }
            anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
            id={ id }
            keepMounted
            transformOrigin={ { vertical: 'top', horizontal: 'right' } }
            open={ open }
            onClose={ onClose }>
            { users.map((user) => (
                <MenuItem key={ user.id } onClick={ () => {
                    setCurrentUser(user.id)
                    onClose()
                } }>
                    { user.name }
                </MenuItem>
            )) }
        </Menu>
    )
}

export default connect(
    (state) => ({
        users: usersSelector(state)
    }),
    {
        setCurrentUser
    }
)(AccountList)
