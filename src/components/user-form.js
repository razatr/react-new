import React, { useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'

function UserForm(props) {

    const [state, setState] = useState({
        name: '',
        phone: '',
        address: ''
    })

    const { name, phone, address } = state

    const handleNameChange = ev => {
        setState({
            name: ev.target.value,
            phone,
            address
        })
    }

    const handlePhoneChange = e => {
        setState({
            name,
            phone: e.target.value,
            address
        })
    }

    const handleAddressChange = e => {
        setState({
            name,
            phone,
            address: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <Grid container style={ { flexDirection: 'column', padding: '16px' } }>
            <TextField id="standard-text" label="Name" type="text" onChange={ handleNameChange } />
            <TextField id="standard-text" label="Telephone Number" type="tel" onChange={ handlePhoneChange } />
            <TextField id="standard-text" label="Address" type="text" onChange={ handleAddressChange } />
            <Button onClick={ submit }>
                Send order
            </Button>
        </Grid>
    )
}

export default UserForm