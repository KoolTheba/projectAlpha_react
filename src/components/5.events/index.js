import React from 'react';
import './App.css';

// events
import Apibutton from './components/5.events/Apibutton'
import ItemNumber from './components/5.events/ItemNumber'
import Focus from './components/5.events/Focus'
import Select from './components/5.events/Select'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1>Events cuties</h1>
          <Apibutton />
          <ItemNumber />
          <Focus />
          <Select />
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