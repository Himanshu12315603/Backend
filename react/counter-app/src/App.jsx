import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);  // 1, 2,
  const [todos, setTodos] = useState([
    { 
      title: "Go to gym",
      description: "Go to gym at 5 am",
      completed: false
    },
    { 
      title: "DSA",
      description: "Studey dsa for 1 hour",
      completed: true 
    },
  ])

  function addTodos() {
    
    setTodos([...todos, {
      title: "New Todo",
      description: "This is a new todo",
      completed: false
    }])
  }

  return (
    <div>
      <button onClick={addTodos}>Add todos</button>

      {todos.map(function(todo) {
        return <TodoList title={todo.title} description={todo.description} />
      })}



      {/* <TodoList title= {todos[0].title}  description= {todos[0].description}/>
      <TodoList title= {todos[1].title}  description= {todos[1].description}/>
      <TodoList title= {todos[0].title}  description= {todos[0].description}/> */}


      {/* <TodoList title="Go to gym" description="Go to gym at 5 am"/>
      <TodoList title="Go to gym" description="Go to gym at 5 am"/> */}
    </div>

    // <div>
    //   {JSON.stringify(todos)}
    //   {/* <CustomButton count={count} setCount={setCount}> </CustomButton> */}
    // </div>
  )
}

function TodoList(props) {
  return <div> 
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

// component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
