import React, {useState, useEffect} from 'react'

// Hooks
import LetterChanger from './components/18.hooks/LetterChanger'
import SayDismounted from './components/18.hooks/SayDismounted'
import UpdatingFromProps from './components/18.hooks/UpdatingFromProps'
import SimpleTodos from './components/18.hooks/SimpleTodos'
import WrongText from './components/18.hooks/WrongText'
import useFetchDataHook from './components/18.hooks/useFetchDataHook'
import SimpsonsQuotes from './components/18.hooks/SimpsonsQuotes'

function AppGen() {

  const [isShown, setShown] = useState(true)
  const [plants, setData] = useState([])

  useEffect(() => {
    async function loadData(){
      const data = await (await import(`./utils/data.js`)).default
      setData(data)
    }
    loadData()
  }, [])

  const quotes = useFetchDataHook('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')

  return (
    <div className="App">
      <header className="App-header">
        <>
        <h2>We are Hooks!</h2>
        <LetterChanger />
        <br/>
        {isShown && <SayDismounted/>}
        <button 
          onClick={() => setShown(!isShown)}
          style={{ cursor: 'pointer', padding: '0.5rem', fontWeight: 'bold'}}
        >
          {isShown ? 'Destroy' : 'Show'}
        </button>
        <br/>
        <UpdatingFromProps plants={plants}/>
        <br/>
        <WrongText />
        <br/>
        <SimpsonsQuotes quotes={quotes} />
        <br/>
        <SimpleTodos/>
        </>
      </header>
    </div>
  );
}

export default AppGen