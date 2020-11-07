import React from 'react'

export default class TextBinded extends React.Component {
    state = {
        value: ''
    }

    handleChange = this.handleChange.bind(this);

    handleChange(e){
        this.setState({ value: e.target.value})
    }

    render(){
        return(
            <>
                <h2>Text Binded: {this.state.value}</h2>
                <label>
                    Write: 
                    <textarea 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                    />
                </label>
            </>
        )
    }
}