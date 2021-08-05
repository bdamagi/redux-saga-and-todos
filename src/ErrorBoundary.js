import { reflect } from 'async'
import React from 'react'

import ErrorBoundarySection from './ErrorBoundarySection'


class ErrorBoundary extends React.Component {
    state = { hasError: false }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }


    render() {
        if (this.state.hasError) {
            return <h1>An error occurred.</h1>
        }

        return (
            <ErrorBoundarySection />
        )
    }
}

export default ErrorBoundary



