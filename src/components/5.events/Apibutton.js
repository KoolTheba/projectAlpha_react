import React from 'react'

export default class Apibutton extends React.Component {
    state = {
        task: null
    }

    handleApiCall = () => {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => this.setState({ task: data }))
    }

    render(){
        const { task } = this.state

        return(
            <>
            <h3>We're api calls :-)</h3>
            <button
                onClick={this.handleApiCall}
                style={{ padding: '0.5rem', cursor: 'pointer'}}
            >Api call!
            </button>
            {task && 
            <ul>
                <li key={task.id}>{task.title}</li>
            </ul>
            }
            </>
        )
    }
}