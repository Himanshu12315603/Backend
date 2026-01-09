import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Learn React", description: "learn react from scratch"},
    {id: 2, title: "Learn DSA", description: "learn DSA from scratch"},
    {id: 3, title: "Go To GYm", description: "Go To GYm daily"},
  ])


  function addTodo() {
    setTodos([...todos, {
      id: 4,
      title: "Eat food",
      description: "Eat healthy food"
    }])
  }

  return (
    <div>
      <button onClick = {addTodo}>Add Todo</button>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}

    </div>
  )
}



function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>

    <h5>{description}</h5>
  </div>
}







// function HeaderWithButton() {
//   const [title, setTitle] = useState("Himanshu");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }

//   return <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title} />

//     </div>
  
// }

// function Header(props) {
//   return <div>
//     {props.title}
//   </div>
// }


export default App
