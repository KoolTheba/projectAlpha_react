import React from 'react';
import './App.css';

// lifeCycle
import Names from './components/4.lifeCycle/Names'
import Seconds from './components/4.lifeCycle/Seconds'
import Tasks from './components/4.lifeCycle/Tasks'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1>LifeCycle cuties</h1>
          <Names />
          <Seconds />
          <Tasks />
        </>
      </header>
    </div>
  );
}

export default App;
