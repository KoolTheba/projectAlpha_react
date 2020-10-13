import React from 'react'

const UsersTable = () => {
    const users = [{ 
        name: 'Sergio', age: 28 
    }, { 
        name: 'Victoria', age: 27 
    }, { 
        name: 'Iván', age: 30 
    }, { 
        name: 'Liviu', age: 26 
    }]

    const renderTableDate = () => {
        return users.map((user, i) => {
            return(
                <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            )
        })
    }

    return(
        <>
            <h3>Users Table</h3>
            <table>
                <th>Name</th>
                <th>Age</th>
                <tbody>
                    {renderTableDate()}
                </tbody>
            </table>
        </>
    )
}

export default UsersTable