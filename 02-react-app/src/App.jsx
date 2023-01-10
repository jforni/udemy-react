import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  
  let contador = 50;
  const disminuir = () => {
    contador--;
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
        <p>
          <button onClick={ disminuir }> - </button>
          <h2>{contador}</h2>
          <button> + </button>
        </p>

        <h1>{new Date().getDate() + '/' + new Date().getMonth()+1 + '/' + new Date().getFullYear() }</h1>
      </header>      
    </div>
  )
}

export default App
