import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
     </>
  )
}

export default App
