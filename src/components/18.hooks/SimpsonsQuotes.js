import React from 'react'
import generateRandomId from '../../utils/generateRandomId'

const SimpsonsQuotes = (props) => {
    return(
        <>
        <p>5. I'm using a Custom Hook</p>
        <h3>Simpsons Quotes</h3>
        <ul style={{ textAlign: 'left' }}>
            {props.quotes.map(e => (
                <li key={generateRandomId()}>"{e.quote}" by 
                <span role='img' aria-label='image'> 👉 </span> 
                {e.character}
                </li>
            ))}
        </ul>
        </>
    )
}

export default SimpsonsQuotes