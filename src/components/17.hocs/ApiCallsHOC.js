import React from 'react'

const ApiCallsHOC = (Component, url) => {
    return class extends React.Component {
        state = {
            data: [],
            loading: true
        }

        componentDidMount(){
            this.fetchData()
        }
    
        fetchData = async () => {
            const data = await (await fetch(url)).json()
            this.setState({ data })
            this.setState({ loading: false})
        }
    
        render(){
            const {data, loading} = this.state
            return (
                <>
                {loading 
                ? <h2>Loading...Loading</h2> 
                : <Component data={data}/>}
                </>
            )
        }
    }
}

export default ApiCallsHOC
