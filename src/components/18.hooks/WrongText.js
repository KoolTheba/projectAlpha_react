import React, { useState, useEffect, useRef } from 'react'
import checkCorrectWord from '../../utils/checkCorrectWord'

const WrongText = () => {
    const [text, setText] = useState('')
    const [error, setError] = useState(false)
    const [match, setMatch] = useState(true)
    const textAreaElement = useRef('')

    useEffect(() => {
        if (checkCorrectWord(text) === false){
            setMatch(false)
            setError(false)
        }
    }, [text])

    return(
        <>
        <p>4. I'm the Wrong text component</p>
        <p>Type your fav word...(hint: zamarro is the correct one ;-)</p>
        {error && <p>Error!! Try with another word</p>}
        {match && <p>Success!!</p>}
        <input 
            onChange={() => setText(textAreaElement.current.value)}
            ref={textAreaElement}
            placeholder='type your word...'    
        ></input>
        <button
            onClick={() => checkCorrectWord(text) ? setMatch(true) : setError(true)}
        >Check word</button>
        </>
    )
}

export default WrongText