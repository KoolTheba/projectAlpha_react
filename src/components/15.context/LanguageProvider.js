import React from 'react'
import { LangContext } from './lang-context'

export default class LanguageProvider extends React.Component{
    state = {
        language: 'english',
    }

    updateLanguage = (e) => {
        this.setState({language: e.target.value})
    }
    
    render(){
        return(
            <LangContext.Provider value={{language: this.state.language, toggleLanguage: this.updateLanguage}}>
            {this.props.children}
            </LangContext.Provider>
        )
    }
}