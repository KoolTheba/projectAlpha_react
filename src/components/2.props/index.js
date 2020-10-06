import React from 'react';
import './App.css';

// props
import Title from './components/2.props/Title'
import Text from './components/2.props/Text'
import List from './components/2.props/List'
import ListItem from './components/2.props/ListItem'
import Link from './components/2.props/Link'
import Loading from './components/2.props/Loading'
import ButtonGreet from './components/2.props/ButtonGreet';
import LogProps from './components/2.props/LogProps';

function App() {
    return (
      <div className="App">
        <header className="App-header">
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
  

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );