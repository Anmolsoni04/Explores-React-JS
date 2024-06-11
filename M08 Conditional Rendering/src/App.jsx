import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(true)
  const [todos, seTodos] = useState([
    {
      title: "my todo",
      desc: "you well get to know my upcoming tasks"
    },
    {
      title: "my todo2",
      desc: "you well get to know my upcoming work"
    },
    {
      title: "my todo3",
      desc: "you well get to know my all tasks"
    },
    {
      title: "my todo4",
      desc: "you well get to know my whole tasks"
    },
  ])
  const Todo = ({todo}) => {
    return (<>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </>)
  }

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
      {showBtn ? <button>showBtn is true</button>: <button>showBtn is false</button>}
      
      {todos.map(todo=>{
        return <Todo todo = {todo}  /> //todo is the prop
      })}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Toggle Me
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
