import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchData = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/users')
    }, [])

    if(isLoading) return 'Loading....Loading....'

    return(
        <>
        <div style={{ marginTop: '100px'}}>
        <h3 style={{ color: '#FDEA01'}}>
            Check our super-dupper Users!!
        </h3>
        <ul style={{textAlign: 'left'}}>
            {users.map(e => (
                <li key={e.id} style={{color: '#249AE4', marginBottom: '1rem'}}>
                    <Link 
                        to={`/users/${e.id}`}
                        style={{color: '#249AE4'}}
                    >{e.name} {e.username}
                    </Link>
                </li>
            ))}
        </ul>
        </div>
        </>
    )
}

export default Users