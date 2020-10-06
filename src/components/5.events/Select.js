import React from 'react'

export default class Select extends React.Component {
    state = {
        options: ['apple', 'orange', 'chocolate'],
        value: ''
    }

    handleSelect = (e) => {
        this.setState({ value: e.target.value })
    }

    render(){
        const { options } = this.state
        return (
            <>
            <h3>We're Select items!</h3>
            <p>I'm the selected one: {this.state.value}</p>
            <select onChange={this.handleSelect} style={{cursor: 'pointer'}}>
            {options.map(option => (
                <option key={option}>{option}</option>
            ))}
            </select>
            </>
        )
    }
}