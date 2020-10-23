import React from 'react'
import LanguageConsumer from './LanguageConsumer'

const LanguageButton = (props) => {
    return(
        <>
        <LanguageConsumer>
            {({ language }) => <button>{props.messages[language]}</button>}
        </LanguageConsumer>
        </>
    )
}

export default LanguageButton