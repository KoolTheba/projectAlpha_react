import React from 'react'

import ListContainer from './ListContainer'
import List from './List'
import ListItem from './ListItem'
import InputText from './InputText'
import AddTaskButton from './AddTaskButton'
import RemoveTaskButton from './RemoveTaskButton'

export default class Todo extends React.Component {
    state = {
        todos: ['Walk the Dog', 'Watch Primates', 'Make a smoothie'],
        value: ''
    }

    handleInputValue = (e) => {
        this.setState({ value: e.target.value})
    }

    handleAddTask = () => {
        this.setState(state => ({
            todos: [...state.todos, state.value],
            value: ''
        }))
    }

    handleRemoveTask = (todo) => {
        this.setState(state => ({
            todos: state.todos.filter(e => e !== todo)
        }))
    }

    render(){
        const { todos, value } = this.state
        return(
            <>
            <InputText
                value={value}
                onInputChange={this.handleInputValue}
                placeholder={'enter a todo...'}
            />
            <AddTaskButton
                disabled={!value}
                type="submit"
                addTask={this.handleAddTask}
            />
            <ListContainer>
            <List>
            {todos.map(todo => (
                <div key={todo} style={{ display: 'flex', flexDirection: 'row', marginBottom: '0.5rem'}}>
                <ListItem item={todo}/>
                <RemoveTaskButton handleRemoveTask={() => this.handleRemoveTask(todo)} />
                </div>
            ))}
            </List>
            </ListContainer>
            </>
        )
    }
}