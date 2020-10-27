import React from 'react'

const UsersList = props => {
    return(
        <>
            <h2>Users</h2>
            <ul style={{ textAlign: 'left' }}>
                {props.data.map((el) => (
                <li key={el.id}>
                    {el.name}, {el.username}: {el.email}
                </li>
                ))}
            </ul>
        </>
    )
}

export default UsersList