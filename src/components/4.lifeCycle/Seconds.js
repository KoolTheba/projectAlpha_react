import React from 'react'

export default class Seconds extends React.Component {
    state = {
        count: 0
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         this.tick()
    //     }, 1000)
    // }

    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }

    // tick(){
    //     this.setState(prevState => ({ count: prevState.count + 1}))
    // }

    render(){
        return(
            <>
                <h2>Seconds section</h2>
                <span>Seconds: {this.state.count}</span>
            </>
        )
    }
}