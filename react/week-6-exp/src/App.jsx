import { useState } from 'react'

function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title="Hello Linux2" />
    </div>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Himanshu");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />

    </div>
  
}

function Header(props) {
  return <div>
    {props.title}
  </div>
}


export default App
