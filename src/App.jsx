import { useState } from 'react'
import './App.css'
import { foodRange } from './data/foodRange'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from  './pages/Home'
import About from  './pages/About'
import Pagenotfound from  './pages/Pagenotfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
