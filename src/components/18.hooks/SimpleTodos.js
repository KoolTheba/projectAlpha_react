import React, {useState, useEffect} from 'react'

const SimpleTodos = () => {
    const [todos, setTodos] = useState([])

    const fetchData = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setTodos(data)
    }

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/todos/')
    }, [])

    return(
        <>
        <p>6. I'm api fetching tons of todos</p>
        <h3>My Todos...</h3>
        <ul style={{ textAlign: 'left' }}>
            {todos.map(e => (
                <li key={e.id}>{e.title}</li>
            ))}
        </ul>
        </>
    )
}

export default SimpleTodos