import React from 'react'

export default class Focus extends React.Component {
    
    state = {
        isFocus: false
    }

    handleFocus = (e) => {
        this.setState({ isFocus: true })
    }
    handleBlur = (e) => {
        this.setState({ isFocus: false })
    }
    
    render(){
        return (
            <>
            <h3>We're focus items! {this.state.isFocus ? 'Dentro' : 'Fuera'}</h3>
            <textarea
                placeholder={'write your stuff...'}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            ></textarea>
            </>
        )
    }
}