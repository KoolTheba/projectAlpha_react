import React from 'react';
import './App.css';

// lifeCycle
import Names from './Names'
import Seconds from './Seconds' 
import Tasks from './Tasks'


class App extends React.Component {

  state = {
    isShown: true
  }

  handleShow = () => {
    this.setState(state => ({ isShown: !state.isShown}))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <>
            <h1>LifeCycle cuties</h1>
            <button
              onClick={this.handleShow}
              style={{ cursor: 'pointer', padding: '0.5rem', fontWeight: 'bold'}}
            >{this.state.isShown ? 'Destroy' : 'Show'} Names section</button>
            {this.state.isShown && <Names />}
          </>
          <>
            <Seconds />
            <Tasks />
          </>
        </header>
      </div>
    );
  }
}

export default App;
