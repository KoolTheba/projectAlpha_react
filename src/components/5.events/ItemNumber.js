import React from 'react'

export default class ItemNumber extends React.Component {

    state = {
        item: ''
    }

    handleClick = (e) => {
        this.setState({item: e.target.innerHTML})
    }

    render(){
        return(
            <>
            <h3>We're items!</h3>
            <h4>Here is my choice: {this.state.item}</h4>
            <ul>
                <li style={{cursor: 'pointer'}} onClick={this.handleClick}>1st</li>
                <li style={{cursor: 'pointer'}} onClick={this.handleClick} >2nd</li>
                <li style={{cursor: 'pointer'}} onClick={this.handleClick}>3rd</li>
                <li style={{cursor: 'pointer'}} onClick={this.handleClick}>4th</li>
            </ul>
            </>
        )
    }
}