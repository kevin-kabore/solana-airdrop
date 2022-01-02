import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import {Balance} from './components/Balance'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Solana Airdrop Program</p>
      </header>
      <Balance />
    </div>
  )
}

export default App
