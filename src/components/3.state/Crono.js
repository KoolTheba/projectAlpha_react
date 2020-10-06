import React from 'react'

export default class Crono extends React.Component {

    state = {
        count: 0
    }

    startChronometer = () => {
        setInterval(() => {
            this.setState(state => ({ count: state.count + 1}))
        }, 1000)
    }

    render(){
        return(
            <>
                <h2>Crono section</h2>
                <span>{this.state.count}</span>
                <button
                    onClick={this.startChronometer}
                    style={{ cursor: 'pointer'}}
                >Start
                </button>
            </>
        )
    }
}