import React from 'react';
import './App.css';

// Props
import ShowServerConfig from './components/13.propTypes/ShowServerConfig'

function App() {

  const config = {
    minConnections: 3,
    maxConnections: 5,
    restartAlways: false
  }
  const environment = 'live'

  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1>We're validating Props</h1>
          <ShowServerConfig 
            config={config}
            environment={environment}
            ssl
          />
        </>
      </header>
    </div>
  );
}

export default App;