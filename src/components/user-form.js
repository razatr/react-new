import React, { useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'

function UserForm() {

    const [nameState, setNameState] = useState('')
    const [phoneState, setPhoneState] = useState('')
    const [addressState, setAddressState] = useState('')

    const handleNameChange = ev => {
        setNameState(ev.target.value)
    }

    const handlePhoneChange = ev => {
        setPhoneState(ev.target.value)
    }

    const handleAddressChange = ev => {
        setAddressState(ev.target.value)
    }

    const submit = ev => {
        ev.preventDefault()
        console.log(`${ nameState }, ${ phoneState }, ${ addressState }`)
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