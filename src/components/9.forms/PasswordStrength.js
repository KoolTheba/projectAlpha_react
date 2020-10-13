import React from 'react'

export default class PasswordStrength extends React.Component {
    state = {
        password: '',
        complexityLevel: 0
    }

    handleInputChange = (e) => {
        const currentPass = e.target.value;
        this.setState({ 
            password: currentPass,
            complexityLevel: this.validatePasswordStrength(currentPass)
        })
    }
    validatePasswordStrength  = pass => {
        let points = 0;
        const validatorsList = [this.matchUppercase, this.matchNumber, this.matchSpecChars, this.matchLength]
        validatorsList.forEach(val => {
            points += Number(val(pass));
        })
        return points
    }

    matchUppercase = str => /(?=[A-Z]{1})/.test(str)
    matchNumber = str =>  /(?=[0-9]{1})/.test(str)
    matchSpecChars = str => /(?=[$%&/()+-]{1})/.test(str)
    matchLength = str => str.length >= 7

    getComplexityInfo = (level) => {
        let color = 'red'
        let text = 'Weak'
        let isVisible = level > 0

        if(level > 1) {
            color = 'orange'
            text = 'Normal'
        }

        if(level >= 4) {
            color = 'green'
            text = 'Strong'
        }

        return {
            color,
            text,
            isVisible
        }
    }

    render(){
        const { password, complexityLevel } = this.state
        const complexityInfo = this.getComplexityInfo(complexityLevel)
        return(
            <>
            <h3>Is your password strong??</h3>
            <h4>Your password is: <br />
            {complexityInfo.isVisible && 
                <span style={{color: complexityInfo.color}}>{complexityInfo.text}</span>
            }
            </h4>
            <form>
                <input
                    autoComplete={password}
                    name={'password'}
                    type={'password'}
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder={'type your password...'}
                ></input>
                    <button 
                        disabled={complexityLevel < 4} 
                        style={{cursor: complexityLevel >= 4 ? 'pointer' : ''}}
                    >Submit</button>
            </form>
            </>
        )
    }
}