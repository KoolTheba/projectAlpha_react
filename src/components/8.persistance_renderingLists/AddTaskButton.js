import React from 'react'

const AddTaskButton = (props) => {

        return (
            <button
                onClick={props.addTask}
                style={{ marginTop: '1rem', padding: '0.5rem', cursor: 'pointer'}}
            >Add task</button>
        )
}

export default AddTaskButton