import React from 'react'
import ApiCallsHOC from './ApiCallsHOC'

const url = 'https://jsonplaceholder.typicode.com/todos'

const PostsLists = props => {
    return(
        <>
            <h2>Todos:</h2>
            <ul style={{ textAlign: 'left'}}>
            {props.data.map((el) => (
            <li key={el.id}>{el.title}</li>
            ))}
            </ul>
        </>
    )
}

const PostsListComponents = ApiCallsHOC(PostsLists, url)

export default PostsListComponents