import React from 'react'

const ListItem = (props) => {
    return (
    <li key={props.id}>{props.children}</li>
    )
}

export default ListItem

