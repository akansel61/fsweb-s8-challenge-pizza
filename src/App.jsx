import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Order from "./order.jsx";
import Success from "./success.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />

        
        <Route path="/order" element={<Order />} />

        
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
      <div>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
    </>
 
  )
}

export default App
