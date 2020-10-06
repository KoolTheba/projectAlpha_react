import React from 'react'

export default class LoginPage extends React.Component {
    state = {
        isLogged: false
    }

    handleLogin = () => {
        this.setState({ isLogged: !this.state.isLogged })
    }

    render(){
        return(
            <>
            <p>{this.state.isLogged 
                ? 'Esta pagina solo puedo verla por que estoy logueado'
                : 'Inicia sesión para ver contenido privado'
            }</p>
            <button
                onClick={this.handleLogin}
                style={{ cursor: 'pointer', backgroundColor: this.state.isLogged ? 'red' : 'green'}}
            >{this.state.isLogged ? 'Close session' : 'Login'}</button>
            </>
        )
    }
}