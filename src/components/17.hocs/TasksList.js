import React from 'react'

const TasksList = props => {
    return(
        <>
            <h2>Todos</h2>
            <ul style={{ textAlign: 'left' }}>
                {props.data.map((el) => (
                <li key={el.id}>
                    {el.title}
                </li>
                ))}
            </ul>
        </>
    )
}

export default TasksList