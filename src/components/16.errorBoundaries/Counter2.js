import React from 'react'

export default class Counter2 extends React.Component{
    state = {
        counter: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState(state => ({
                counter: state.counter + 2
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return <p>Here is the counter 2: {this.state.counter}</p>
    }
}