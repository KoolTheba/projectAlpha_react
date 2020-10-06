import React from 'react';
import './App.css';

// state
import Counter from './components/3.state/Counter'
import TextBinded from './components/3.state/TextBinded'
import Password from './components/3.state/Password'
import Letters from './components/3.state/Letters'
import Crono from './components/3.state/Crono'
import Likes from './components/3.state/Likes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Counter />
          <TextBinded />
          <Password />
          <Letters />
          <Crono />
          <Likes />
        </>
      </header>
    </div>
  );
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
