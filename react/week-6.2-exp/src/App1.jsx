import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';


function App1() {
    const [selectId, setSelectId] = useState(1);

    return (
        <div>
            <button onClick={()=> {
                setSelectId(1)
            }}>1</button>

            <button onClick={()=> {
                setSelectId(2)
            }}>2</button>

            <button onClick={()=> {
                setSelectId(4)
            }}>4</button>

            <button onClick={()=> {
                setSelectId(5)
            }}>5</button>

            <Todo id={selectId} />
        </div>
    )
}

function Todo({id}) {

    const [todo, setTodo] = useState({});

    useEffect( ()=> {
        axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
            .then(function(responce) {
                setTodo(responce.data[0]);
            })
    }, [id])

    return <div>
        Id: {id}
        <h1>{todo.title}</h1>
        <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
}


export default App1;
