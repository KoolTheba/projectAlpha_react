import React from 'react'

const RemoveTaskButton = (props) => {

    return(
        <button
            onClick={props.handleRemoveTask}
            style={{ marginLeft: '1rem', padding: '0.25rem', cursor: 'pointer'}}
        >Remove</button>
    )
}

export default RemoveTaskButton