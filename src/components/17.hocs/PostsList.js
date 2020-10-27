import React from 'react'

const PostsLists = props => {
    return(
        <>
            <h2>Posts</h2>
            <ul style={{ textAlign: 'left', listStyle: 'none'}}>
                {props.data.map((el) => (
                <li key={el.id}>
                    <h2>{el.title}</h2>
                    <p>"{el.body}"</p>
                </li>
                ))}
            </ul>
        </>
    )
}

export default PostsLists