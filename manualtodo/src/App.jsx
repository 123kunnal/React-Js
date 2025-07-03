import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Todos,setTodo]=useState([{
    desc:"Gym",
    time:"5-7"
  },{
    desc:"Work",
    time:"9-5"
  }])

  function RandomTodo(){
    setTodo([...Todos,{
      desc:"Eat",
      time:"1-2"
    }])
  }
  return ( 
  <>
    <button onClick={RandomTodo}>Add Random Todo</button>
    {Todos.map(function(Item){
      return <Display desc={Item.desc} time={Item.time}/>
    })}
    </>
  )
  function Display(props){
     return <div>
      <h1>{props.desc}</h1>
      <h2>{props.time}</h2>
     </div>
  }
}

export default App
