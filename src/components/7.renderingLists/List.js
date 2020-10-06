import React from 'react'


const List = (props) => {
    return (
    <ol className='list'>{props.children}</ol>
    )
}

export default List