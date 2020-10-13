import React from 'react'

export default class SelectForm extends React.Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    render(){
        const { items } = this.props
        const { value } = this.state
        return(
            <>
            <h3>I'm a Select form</h3>
            <h4>Here is your choice: {value}</h4>
            <select
                items={items}
                value={value}
                onChange={this.handleChange}
                style={{cursor: 'pointer', padding: '0.5rem'}}
            >
                {items.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            </>
        )
    }
}