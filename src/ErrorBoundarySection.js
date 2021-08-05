import React, { Component } from 'react'

class ErrorBoundarySection extends React.Component {
    state = { throw: false }

    onClick = () => this.setState ({ throw: true })


    render() {
        if (this.state.throw) throw new Error('Broke something!')


        return (
            <div>
                <h2>Error Boundaries</h2>
                <button onClick={this.onClick}>
                    Do not Click!
                </button>
            </div>
        )
    }
}

export default ErrorBoundarySection

