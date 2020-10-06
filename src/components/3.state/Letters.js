import React from 'react'

export default class Letters extends React.Component {

    state = {
        string: ''
    }

    increment = this.increment.bind(this);
    decrement = this.decrement.bind(this);
    generateRandomLetters = this.generateRandomLetters.bind(this);

    generateRandomLetters(){
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    increment() {
        this.setState(state => ({
            string: state.string + this.generateRandomLetters()
        }))
    }
  
    decrement(){
        this.setState(state => ({
            string: state.string.slice(0, -1)
        })) 
    }   

    render(){
        return(
            <>
                <h2>Letters Section</h2>
                <h3>"{this.state.string}"</h3>
                <button onClick={this.increment}>Increment Letters</button>
                <button onClick={this.decrement}>Decrement Letters</button>
            </>
        )
    }
}