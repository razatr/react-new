import React, { Component } from 'react'

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
                    <button onClick={this.onClick}>{isOpen ? 'Close reviews' : 'Open reviews'}</button>
                    {isOpen ? <OriginalComponent {...this.props}/> : null}
                </React.Fragment>
            )
        }
    }

export { opener }