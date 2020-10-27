import React from 'react'

export default class LoginForm extends React.Component {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('data to send:', JSON.stringify({password: this.state.password, user: this.state.username }))
    }

    handleInputChange = (event) => {
        const { target } = event
        const { name, value } = target
        
        const newState = { 
            [name]: value, 
        }
        if(name === "password") {
            newState.isValidPass = value.length >= 8
        }

        this.setState(newState)
    }

    render(){
        const { username, password, isValidPass } = this.state
        return(
            <>
            <h3>I'm a cool login form</h3>
            <form
                onSubmit={this.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column'}}
            >
                <input
                    value={username}
                    name={'username'}
                    placeholder={'username'}
                    type='text'
                    onChange={this.handleInputChange}
                >
                </input>
                <input
                    value={password}
                    name={'password'}
                    placeholder={'password'}
                    type='password'
                    onChange={this.handleInputChange}
                ></input>
                <button
                    onClick={this.handleSubmit}
                    disabled={!isValidPass || !username}
                    type='submit'
                    style={{ cursor: 'pointer', marginTop: '1rem'}}
                >Login</button>
            </form>
            </>
        )
    }
}