import React from 'react'
import API from 'todos-goals-api-localstorage'

import ListContainer from './ListContainer'
import List from './List'
import ListItem from './ListItem'
import InputText from './InputText'
import AddTaskButton from './AddTaskButton'
import RemoveTaskButton from './RemoveTaskButton'

export default class Todo extends React.Component {
    state = {
        todos: [],
        value: ''
    }

    componentDidMount(){
        API.fetchTodos()
        .then(todos => {
            this.setState({ todos })
        })
    }

    handleInputValue = (e) => {
        this.setState({ value: e.target.value})
    }

    handleAddTask = async () => {
        await API.saveTodo(this.state.value)
        await API.fetchTodos()
        .then(todos => {
            this.setState({ todos, value: '' })
        })
    }

    handleRemoveTask = async (id) => {
        await API.deleteTodo(id)
        await API.fetchTodos()
        .then(todos => {
            this.setState({ todos })
        })
    }

    render(){
        const { todos, value } = this.state
        return(
            <>
            <InputText
                value={value}
                onChange={this.handleInputValue}
                placeholder={'enter a todo...'}
            />
            <AddTaskButton
                type="submit"
                addTask={this.handleAddTask}
            />
            <ListContainer>
            <List style={{ display: 'flex', flexDirection: 'row', marginBottom: '0.5rem'}}>
            {todos.sort().map(todo => (
                <ListItem id={todo.id}>
                    <div>
                    {todo.name}
                    <RemoveTaskButton handleRemoveTask={() => this.handleRemoveTask(todo.id)}/>
                    </div>
                </ListItem>
            ))}
            </List>
            </ListContainer>
            </>
        )
    }
}