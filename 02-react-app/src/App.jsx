import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const nombre = "Julio"
  return (
    <div className="App">
      <header className='App-header'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <p>
          <button> - </button>
          <h2>10</h2>
          <button> + </button>
        </p>

        <h1>{new Date().getDate() + '/' + new Date().getMonth()+1 + '/' + new Date().getFullYear() }</h1>
      </header>      
    </div>
  )
}

export default App
