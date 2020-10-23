import React from 'react'

export default class FormWithRefs extends React.Component {
    
    userNameRef = React.createRef()
    passwordRef = React.createRef()

    handleChange = () => {
        console.log('Username', this.userNameRef.current.value)
        console.log('Password', this.passwordRef.current.value)
    }

    render(){
        return(
            <>
            <form>
                <label>
                    <input
                        placeholder={'username'}
                        ref={this.userNameRef}
                        onChange={this.handleChange}
                        type={'text'}
                    ></input>
                </label>
                <label>
                    <input
                        placeholder={'password'}
                        ref={this.passwordRef}
                        onChange={this.handleChange}
                        type={'password'}
                    ></input>
                </label>
            </form>
            </>
        )
    }
}