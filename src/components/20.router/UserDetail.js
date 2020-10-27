import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const [user, setUser] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    let {id} = useParams()

    const fetchData = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        if(!data.name){
            setError(true)
        }
        setUser(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData(`https://jsonplaceholder.typicode.com/users/${id}`)
    }, [id])

    if(isLoading){
        return <p>Loading....Loading....</p>
    }

    if(error){
        return <p>Error! User not found!</p>
    }

    return(
        <>
        <div>
            <h2>Check the user id {user.id} details:</h2>
            <div className='user-info-block'>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Location: {user.address.city}</p>
            </div>
        </div>
        </>
    )
}

export default UserDetail