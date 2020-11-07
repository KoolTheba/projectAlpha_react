import React from 'react';
import './App.css';

// styled-components
import Buttons from './Buttons'
import SpinningLogo from './SpinningLogo'

function AppGen() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <SpinningLogo />
          <h2>We're rendering Buttons and a Spinning Logo</h2>
          <br></br>
          <Buttons />
        </>
      </header>
    </div>
  );
}

export default AppGen