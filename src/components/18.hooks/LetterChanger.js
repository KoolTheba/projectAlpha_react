import React, {useState} from 'react'
import letterChanger from '../../utils/letterChanger'

const LetterChanger = () => {
    const [text, setLetters] = useState('')

    return(
        <>
        <p>1. Check how your a's change for b's</p>
        <p>{text}</p>
        <form>
            <textarea onChange={(e) => setLetters(letterChanger(e.target.value))}></textarea>
        </form>
        </>
    )
}

export default LetterChanger
 