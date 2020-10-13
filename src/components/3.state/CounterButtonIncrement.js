import React from 'react'

const CounterButtonIncrement = (props) => {

    return(
        <button 
            onClick={props.increment}
            style={{ cursor: 'pointer', marginBottom: '1rem', padding: '0.5rem'}}
        >Increment</button>
    )
}


export default CounterButtonIncrement