import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    button: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(20),
            alignSelf: 'center',
        },
    },
}))

const opener = (OriginalComponent) => function (props) {
    const classes = useStyles()

    const [ isOpen, setState ] = useState(false)

    const onClick = () => {
        setState(!isOpen)
    }

    return (
        <div className={ classes.root }>
            <Button onClick={ onClick } className={ classes.button }>
                { isOpen ? 'Close reviews' : 'Open reviews' }
            </Button>
            { isOpen ? <OriginalComponent { ...props } /> : null }
        </div>
    )
}

export { opener }
