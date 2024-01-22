import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Test from '../src/components/test'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Test/>
      {/* <Footer/> */}
    </>
  )
}

export default App
