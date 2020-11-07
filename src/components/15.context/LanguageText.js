import React from 'react'
import LanguageConsumer from './LanguageConsumer'

const LanguageText = (props) => {
    return(
        <>
        <LanguageConsumer>
            {({ language }) => props.dictionary[language]}
        </LanguageConsumer>
        </>
    )
}

export default LanguageText