import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";


function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setInterval(() => {
            Math.random();
            fetch("https://sum-server.100xdevs.com/todos")
                .then(async function (res) {
                    const json = await res.json();
                    setTodos(json.todos);
                })
        }, 1000);
    }, [])

    return <div>
        {todos.map(todo => { <Todo title={todo.title} description={todo.description} />})}
    </div>
}


function Todo(title, description) {
    return <div>
        <h1>
            {title}
        </h1>
        <h4>
            {description}
        </h4>
    </div>

}
export default App;