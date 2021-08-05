import React from 'react'
import Portal from './Portal'
import Portal2 from './Portal2'
import ErrorBoundary from './ErrorBoundary'
import ErrorBoundarySection from './ErrorBoundarySection'

export class PortalTogether extends React.Component {
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <Portal />
                <ErrorBoundary>
                    <ErrorBoundarySection />
                </ErrorBoundary>
                <Portal2 />

               
            </div>
        )
    }
}

export default PortalTogether
