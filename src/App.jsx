import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Shop />
    </>
  )
}

export default App
