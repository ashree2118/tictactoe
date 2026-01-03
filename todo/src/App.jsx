import { useState } from 'react'

let idCount=4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "do dsa",
    description: "complete dsa by end of the month"
  }, {
    id: 2,
    title: "do frontend",
    description: "complete frontend by end of the month"
  }, {
    id: 3,
    title: "do backend",
    description: "complete backend by end of the month"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: idCount++,
      title: Math.random(),
      description: "random number"
    }])
  }

  const [title, setTitle] = useState('My First Todo')
  const [description, setDescription] = useState('This is the description of my first todo item.')
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default App
