import React from 'react'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <main className="[ flow ]">
      <h1 className="App-header">
        <Header text="This is the header" />
      </h1>
      <p>Hello from TypeScript</p>
    </main>
  )
}

export default App
