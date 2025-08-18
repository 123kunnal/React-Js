import { useContext, useState } from 'react'
import { CountContext } from './components/context'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // You are wrapping Count with a Provider.
    // Whatever you pass in value={ { count, setCount } } will be available to Count and all of its child components(like CountRenderer, Button, etc.), no matter how deeply nested they are.
    < CountContext.Provider value = {{ count, setCount }}>
  <Count />
    </CountContext.Provider >
  )
}

function Count() {
  console.log("RE-renderin");
  return (
    <div>
      
      
      <CountRenderer />
      <Button />
    </div>
  )
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>
}

function Button() {
  const { count, setCount } = useContext(CountContext)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  )
}

export default App
