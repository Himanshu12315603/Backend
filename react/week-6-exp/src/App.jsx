import { useState } from 'react'
function App() {
  const [title, setTitle] = useState("Himanshu");

  function updateTitle() {
    setTitle("Updated Title");
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="Hello Linux2" />
    </div>
  )
}

function Header(props) {
  return <div>
    {props.title}9
  </div>
}


export default App
