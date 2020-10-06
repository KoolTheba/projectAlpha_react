import React from 'react'

export default class Password extends React.Component {
    state = {
        password: '',
        show: false
    }

    handleChange = this.handleChange.bind(this);
    handleShowPassword = this.handleShowPassword.bind(this);
    handleClearPassword = this.handleClearPassword.bind(this);

    handleChange(e){
        this.setState({ password: e.target.value })
    }

    handleShowPassword(e){
        this.setState({ show: !this.state.show })
    }

    handleClearPassword(e){
        this.setState({ password: ''})
    }

    render(){
        return(
            <>
            <h2>Password section</h2>
            <form>
                <label>
                    Write Password: 
                    <input 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        type={this.state.show ? 'text' : 'password'}
                    />
                </label>
            </form>
            <button
                onClick={this.handleShowPassword}
            >{this.state.show ? 'Hide' : 'Show'} password
            </button>
            <button
                onClick={this.handleClearPassword}
            >Clear Password
            </button>
            </>
        )
    }
}