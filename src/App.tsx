import React from 'react'
import Header from './components/header'

import logo from './logo.svg'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header text="This is the header" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from TypeScript</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
