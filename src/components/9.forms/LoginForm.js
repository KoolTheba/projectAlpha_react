import React from 'react'

export default class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('data to send:', JSON.stringify({password: this.state.password, user: this.state.username }))
    }

    handleInputChange = (e) => {
        const { target } = e
        const { name, value } = target

        this.setState({
            [name]: value
        })
    }

    canSubmit = () => {
        return this.state.password.length < 8
    }

    render(){
        const { username, password } = this.state
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
                    disabled={this.canSubmit()}
                    type='submit'
                    style={{ cursor: 'pointer', marginTop: '1rem'}}
                >Login</button>
            </form>
            </>
        )
    }
}