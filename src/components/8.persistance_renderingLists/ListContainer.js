import React from 'react'

const ListContainer = (props) => {
    return (
        <div className='list-container'>
            <h3>Todo List</h3>
            {props.children}
        </div>
    )
}

export default ListContainer