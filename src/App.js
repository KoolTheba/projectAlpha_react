import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greetings from './components/basics/Greetings'
import ShowName from './components/basics/ShowName'
import ShowMessage from './components/basics/ShowMessage'
import ConditionalRender from './components/basics/ConditionalRender'
import ShowName2 from './components/basics/ShowName2'

import Title from './components/props/Title'
import Text from './components/props/Text'
import List from './components/props/List'
import ListItem from './components/props/ListItem'
import Link from './components/props/Link'
import Loading from './components/props/Loading'
import ButtonGreet from './components/props/ButtonGreet';
import LogProps from './components/props/LogProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings />
        <ShowName user={{name: 'Teba'}}/>
        <ShowName user={{name: 'Enola'}}/>
        <ShowName2>Holiii soy los children!</ShowName2>
        <ShowMessage />
        <ConditionalRender />
        <>
        <Loading show={false}>
          <Title>Necesito partir en componentes todo esto</Title>
          <Text content='Usaré React que permite reutilizar todos esos componentes'/>
          <List>
            <ListItem description={'Observar el HTML'}/>
            <ListItem description={'Pensar en como puedo extraer cada trozo en componentes'}/>
            <ListItem description={'Usarlos en React'}/>
          </List>
          <Link to='https://reactjs.org/' openInNewTab>React Docs</Link>
          <ButtonGreet onClick={() => console.log('Holiiii')}>Click for Holi!</ButtonGreet>
          <LogProps
            colors={console.log(['red', 'white', 'blue'])}
            isactive={console.log(true)}
            callBack={console.log('I\'m a callback')}
            numberOfColors={console.log(3)}
            name={console.log('Yes! I am a p')}
          >Check the console!</LogProps>
        </Loading>
        </>
      </header>
    </div>
  );
}

export default App;
