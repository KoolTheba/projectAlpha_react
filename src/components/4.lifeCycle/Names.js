import React from 'react'

export default class Names extends React.Component {
    state = {
        users: ['Teba', 'Pato']
    }

    componentDidMount(){
        this.setState(state=> ({ users: [...state.users, 'Xena']}))
        console.log('Componente construido!')
    }

    componentWillUnmount(){
        console.log('Componente destruido!')
    }

    render(){
        return(
            <>
                <h2>Names section</h2>
                <ul>
                    {this.state.users.map((user) => 
                        <li key={user}>{user}</li>
                    )}
                </ul>
            </>
        )
    }
}