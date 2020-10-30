import React, { Component } from 'react'
import { Button } from '@material-ui/core'

const opener = OriginalComponent =>
    class DecoratedComponent extends Component {
        state = {
            isOpen: false
        }

        onClick = () => {
            this.setState({ isOpen: !this.state.isOpen })
        }

        render() {
            const { isOpen } = this.state
            return (
                <React.Fragment>
                    <Button onClick={ this.onClick }>
                        { isOpen ? 'Close reviews' : 'Open reviews' }
                    </Button>
                    { isOpen ? <OriginalComponent { ...this.props } /> : null }
                </React.Fragment>
            )
        }
    }

export { opener }