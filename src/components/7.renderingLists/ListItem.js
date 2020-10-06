import React from 'react'

const ListItem = (props) => {
    return (
        <li key={props.item}>{props.item}</li>
    )
}

export default ListItem

