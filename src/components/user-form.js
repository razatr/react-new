import React, { useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    dynamicWrapper: {
        boxSizing: 'border-box',
        flexDirection: 'column',
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(120),
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    button: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(20),
            alignSelf: 'center'
        }
    }
}))

function UserForm() {

    const [nameState, setNameState] = useState('')
    const [phoneState, setPhoneState] = useState('')
    const [addressState, setAddressState] = useState('')

    const classes = useStyles()

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
        setNameState('')
        setPhoneState('')
        setAddressState('')
        console.log(`${ nameState }, ${ phoneState }, ${ addressState }`)
    }

    return (
        <Grid container className={ classes.dynamicWrapper }>
            <TextField value={ nameState } label="User Name" type="text" onChange={ handleNameChange } />
            <TextField value={ phoneState } label="Telephone Number" type="tel" onChange={ handlePhoneChange } />
            <TextField value={ addressState } label="Address" type="text" onChange={ handleAddressChange } />
            <Button onClick={ submit } className={ classes.button }>
                Send order
            </Button>
        </Grid>
    )
}

export default UserForm