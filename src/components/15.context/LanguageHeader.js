import React from 'react'
import LanguageConsumer from './LanguageConsumer'

export default function LanguageHeader(props){
    return(
        <LanguageConsumer>
            {({ language, toggleLanguage }) => (
                <header>
                    <p>{props.description[language]}</p>
                    <select onChange={toggleLanguage}>
                        <option value='english'>English</option>
                        <option value='español'>Español</option>
                    </select>
                </header>
            )}
        </LanguageConsumer>
    )
}