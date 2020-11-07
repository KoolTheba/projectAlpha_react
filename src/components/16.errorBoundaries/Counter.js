import React from 'react'

export default class Counter extends React.Component{
    state = {
        counter: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState(state => ({
                counter: state.counter + 1
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        if(this.state.counter === 3) {
            throw new Error('Error here!!')
        }
        return <p>Here is the counter: {this.state.counter}</p>
    }
}