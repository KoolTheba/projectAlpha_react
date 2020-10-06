import React from 'react'

const InputText = (props) => {
    return(
        <>
        <input
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        ></input>
        </>
    )
}

export default InputText