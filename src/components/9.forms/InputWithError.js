import React from 'react'

export default class InputWithError extends React.Component {

    state= {
        value: ''
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    render(){
        const { value } = this.state
        const error = value.toLowerCase().trim()

        return(
            <>
            <h3>I'm an Input with an error</h3>
            <form>
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={'type your stuff...'}
                ></textarea>
            </form>
            {error === 'a tope con react' && 
                <p style={{ color: 'red'}}
                >Error!!
                </p>
            }
            </>
        )
    }
}