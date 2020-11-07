import React from 'react'

export default class LoginPage extends React.Component {
    state = {
        isLogged: false
    }

    handleLogin = () => {
        this.setState({ isLogged: !this.state.isLogged })
    }

    render(){
        const { isLogged } = this.state
        return(
            <>
            <p>{isLogged 
                ? 'Esta pagina solo puedo verla por que estoy logueado'
                : 'Inicia sesión para ver contenido privado'
            }</p>
            <button
                onClick={this.handleLogin}
                style={{ cursor: 'pointer', backgroundColor: isLogged ? 'red' : 'green'}}
            >{isLogged ? 'Close session' : 'Login'}</button>
            </>
        )
    }
}