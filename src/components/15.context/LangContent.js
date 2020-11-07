import React from 'react'
import LanguageText from './LanguageText'
import LanguageButton from './LanguageButton'

export default function LangContent (){
        return(
            <>
                <LanguageText dictionary={{
                    english: "Im the text in English",
                    español: "Soy el texto en Español"
                }}/>
                <LanguageButton messages={{
                    english: 'Click button',
                    español: 'Clicka el botón'
                }}/>
            </>
        )
}
