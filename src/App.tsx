import * as React from 'react'
import logo from './logo.svg'
import './App.css'
import {Balance} from './components/Balance'
import {ConnectionProvider} from './contexts/connection'

function App() {
  return (
    <ConnectionProvider>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Solana Airdrop Program</p>
        </header>
        <Balance />
      </div>
    </ConnectionProvider>
  )
}

export default App
