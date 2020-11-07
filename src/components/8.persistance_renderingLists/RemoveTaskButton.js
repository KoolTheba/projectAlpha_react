import React from 'react'

const RemoveTaskButton = (props) => {

    return(
        <button
            onClick={props.handleRemoveTask}
            style={{ marginLeft: '1rem', padding: '0.25rem'}}
        >Remove</button>
    )
}

export default RemoveTaskButton