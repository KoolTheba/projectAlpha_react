import React from 'react'

const CounterButtonDecrement = (props) => {

    return(
        <button 
            onClick={props.decrement}
            style={{ cursor: 'pointer', marginBottom: '1rem', padding: '0.5rem'}}
        >Decrement</button>
    )
}


export default CounterButtonDecrement