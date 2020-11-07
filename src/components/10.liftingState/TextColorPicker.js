import React from 'react'

const TextColorPicker = (props) => {

    return(
        <>
        <h4 style={{ 
            color: `${props.color}`, 
            backgroundColor: 'white', 
            padding: '1rem'
        }}
        >I'm the text that changes its color
        </h4>
        </>
    )
}

export default TextColorPicker