import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
}))

function Loader() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default Loader
