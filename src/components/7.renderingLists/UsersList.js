import React from 'react'

const UsersList = () => {
    const users = ['sergio', 'victoria', 'iván', 'liviu']

    return(
        <ul>
            {users.map((user, i) => <li key={i}>{user}</li>)}
        </ul>
    )
}

export default UsersList