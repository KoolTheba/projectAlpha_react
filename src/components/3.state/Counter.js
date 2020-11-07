import React from 'react'
import CounterDisplay from './CounterDisplay'
import CounterButtonIncrement from './CounterButtonIncrement'
import CounterButtonDecrement from './CounterButtonDecrement'

export default class Counter extends React.Component {

    state = {
      count: 0
    }

    increment = () => {
      this.setState(state => ({
        count: state.count + 1 
      }))
    }

    decrement = () => {
      this.setState(state => ({
        count: state.count - 1
      }))
    }
  
    render() {
      return (
         <>
          <h2>Counter section</h2>
          <CounterDisplay count={this.state.count} />
          <CounterButtonIncrement increment={this.increment} />
          <CounterButtonDecrement decrement={this.decrement} />
        </>
      )
    }
}