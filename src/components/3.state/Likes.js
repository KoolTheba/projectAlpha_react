import React from 'react'

export default class Likes extends React.Component {
    state = {
        count: 50,
        clicked: false
    }

    handleLikes = () => {
        this.setState(prevState => ({ count: prevState.count + 1, clicked: true}))
    }

    render(){
        return(
            <>
                <h2>Likes section</h2>
                <span>{this.state.count}</span>
                <button
                    onClick={this.handleLikes}
                    style={{cursor: 'pointer'}}
                    disabled={this.state.clicked}
                >Like<span role='img' aria-label='img'>💜</span>
                </button>
            </>
        )
    }
}
