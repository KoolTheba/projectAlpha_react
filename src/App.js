import React from 'react';
import './App.css';

// conditional rendering
import Todo from './components/8.persistance_renderingLists/Todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1>We're rendering a Todo list</h1>
          <Todo />
        </>
      </header>
    </div>
  );
}

export default App;