import React from 'react'

const ApiCallsHOC = (Component, url) => {
    return class extends React.Component {
        state = {
            data: []
        }
    
        async componentDidMount(){
            let response = await fetch(url)
            let data = await response.json()
            this.setState({ data })
        }
    
        render(){
            return (
                <Component data={this.state.data}/>
            )
        }
    }
}

export default ApiCallsHOC
