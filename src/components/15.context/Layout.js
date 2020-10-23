import React from 'react'
import LanguageProvider from './LanguageProvider'
import LanguageHeader from './LanguageHeader'
import LangContent from './LangContent'

function Layout(){
    return(
        <>
        <LanguageProvider>
            <LanguageHeader description={{
                english: 'Choose your language with a click',
                español: 'Elige el idioma con un click' 
            }}/>
            <br></br>
            <LangContent />
        </LanguageProvider>
        </>
    )
}

export default Layout