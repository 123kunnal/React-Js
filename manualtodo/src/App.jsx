import { useState } from 'react'
import './App.css'

function App() {
  const [Todos, setTodo] = useState([
    {
      id: 1,
      desc: "Gym",
      time: "5-7"
    },
    {
      id: 2,
      desc: "Work",
      time: "9-5"
    }
  ])

  // This keeps track of next unique ID
  const [nextId, setNextId] = useState(3);

  function RandomTodo() {
    const newTodo = {
      id: nextId,
      desc: "Eat",
      time: "1-2"
    };
    setTodo([...Todos, newTodo]);
    setNextId(nextId + 1); // increment for uniqueness
  }

  return (
    <>
      <button onClick={RandomTodo}>Add Random Todo</button>
      {Todos.map((item) => (
        <Display key={item.id} desc={item.desc} time={item.time} />
      ))}
    </>
  )
}

function Display(props) {
  return (
    <div>
      <h1>{props.desc}</h1>
      <h2>{props.time}</h2>
    </div>
  );
}

export default App
