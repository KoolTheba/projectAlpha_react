import React, {useEffect} from 'react'
import generateRandomId from '../../utils/generateRandomId'

const UpdatingfromProps = (props) => {

    useEffect(() => console.log('Im getting updated!!'))

    return(
        <>
        <p>3. I'm updated from my parent's props!!</p>
        <ul style={{ textAlign: 'left' }}>
            {props.plants.map(e => (
                <li key={generateRandomId()}>{e.name}</li>
            ))}
        </ul>
        </>
    )
}

export default UpdatingfromProps