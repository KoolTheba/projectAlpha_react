import React from 'react';
import './App.css';

// basics
import Greetings from './components/1.basics/Greetings'
import ShowName from './components/1.basics/ShowName'
import ShowMessage from './components/1.basics/ShowMessage'
import ConditionalRender from './components/1.basics/ConditionalRender'
import ShowName2 from './components/1.basics/ShowName2'


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <>
          <h1>Basic Components!</h1>
          <Greetings />
          <ShowName user={{name: 'Teba'}}/>
          <ShowName user={{name: 'Enola'}}/>
          <ShowName2>Holiii soy los children!</ShowName2>
          <ShowMessage />
          <ConditionalRender />
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
  