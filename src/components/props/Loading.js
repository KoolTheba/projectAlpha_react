import React from 'react'

const Loading = (props) => {
    const loadingText = 'Loading...'
    return (
        <div>
            {props.show 
            ? loadingText 
            : props.children}
        </div> 
    )
}

export default Loading