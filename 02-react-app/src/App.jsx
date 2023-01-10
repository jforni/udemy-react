import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {

  const [ contador, setContador] = useState(0);

  const disminuir = () => {
    setContador(contador - 1)
    console.log(contador);
  }
  const aumentar = () => {
    setContador(contador + 1)
    console.log(contador);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" width="250" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} width="250" className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <button onClick={ disminuir }> - </button>
          <h2>{contador}</h2>
          <button onClick={ aumentar }> + </button>
        </div>

        <h1>{new Date().getDate() + '/' + new Date().getMonth()+1 + '/' + new Date().getFullYear() }</h1>
      </header>      
    </div>
  )
}

export default App
