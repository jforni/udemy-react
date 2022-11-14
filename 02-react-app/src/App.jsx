import {useState} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const App = () => {
  const [contador, setContador] = useState(50);

  const disminuir = () => {
    setContador(contador - 1);
  }

  const aumentar = () => {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <img src={reactLogo} width='250' className='App-logo' alt='logo' />
        <div className='containerContador'>
          <button onClick={disminuir}> - </button>
          <h1>{contador}</h1>
          <button onClick={aumentar}> + </button>
        </div>
      </header>
    </div>
  );
}

export default App
