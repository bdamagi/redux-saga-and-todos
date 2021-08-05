import React from 'react'
import Portal from './Portal'

class Portal2 extends React.Component {
    state = { show: false }

    onClick = () => this.setState({ show: !this.state.show})


    render() {
        return (
            <div>
                <h2>Portals</h2>
                <button onClick={this.onClick}>
                    Toggle Portal
                </button>

                {this.state.show && (
                    <Portal>
                        <p>this is rendering outside main DOM tree</p>
                    </Portal>
                )}
            </div>
        )
    }
}

export default Portal2