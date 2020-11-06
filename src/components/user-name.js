import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { usersLoadedSelector, userSelector } from '../selectors'
import { loadUsers } from '../AC'

function UserName(props) {

    const { userLoaded, user, loadUsers, id } = props

    useEffect(() => {
        console.log('gg')
        if(!userLoaded) // TODO: Добавить условие проверки существования элемента в коде для всех сущностей
            loadUsers([id])
    })

    return !userLoaded ? 'Loading' :(<Typography variant="h6">{ user.name }</Typography>)
}

export default connect((state, ownProps) => ({
    usersLoaded: usersLoadedSelector(state),
    user: userSelector(state, ownProps)
}), { loadUsers })(UserName)