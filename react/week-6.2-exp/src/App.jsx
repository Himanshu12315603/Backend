import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [todos, setTodos] = useState([])

  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then( function(response) {
      // console.log(response.data)
        setTodos(response.data)
      })


  }, []);

  return (
    <>
      {todos.map( todo => (<Todo key={todo.id} title={todo.title} completed={todo.completed}/>))}
    </>
  )
}

function Todo({title, completed}) {
  return <div>
    <h3>{title}</h3>
    <p>{completed ? 'Completed' : 'Not Completed'}</p>
  </div>
}

export default App
