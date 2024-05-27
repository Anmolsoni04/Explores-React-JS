 import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // 1st use case of ref hook :
  let a = useRef(0);

  // 2nd use case of ref hook :
  const btnref = useRef()
  useEffect(() => {
    a.current = a.current + 1
    console.log(`i am re-rendered and The value of a is ${a.current}`)
    btnref.current.style.backgroundColor = "green"
    btnref.current.style.color = "white"
  })
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={() => {
          btnref.current.style.display = "none";
        }}>Disappear the counter</button>
      <p className="read-the-docs">
        </p>
        Click on the Vite and React logos to learn more
    </>
  )
}

export default App
