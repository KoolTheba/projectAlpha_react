import React from 'react'

const InputText = (props) => {
    return(
        <>
        <input
            value={props.value}
            type={'text'}
            placeholder={props.placeholder}
            onChange={props.onInputChange}
        ></input>
        </>
    )
}

export default InputText