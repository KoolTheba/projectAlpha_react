import React from 'react'

export default class Tasks extends React.Component {
    state = {
        tasks: []
    }

    componentDidMount(){
        this.fetchTasks()
        .then(data => this.setState({ tasks: data}))
    }

    fetchTasks() {
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
    }

    render(){
        const tasksList = this.state.tasks
        return (
            <>
                <h3>Tasks for this week:</h3>
                <ul>
                    {tasksList.map(task => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            </>
        )
    }
}