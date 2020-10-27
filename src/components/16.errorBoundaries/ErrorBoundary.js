import React from 'react'

export default class ErrorBoundary extends React.Component {
    state = { 
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        console.log('ERROR - somenthing went wrong!', this.state.error, this.state.errorInfo)
    }

    render(){
        if(this.state.errorInfo){
            return (
                <>
                <h1>ERROR! Something went wrong</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
              </>
            )
        }
        return this.props.children
    }
}