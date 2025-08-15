import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import { CountContext } from './components/context'
import './App.css'
//wrap anyone who wants to use the teleported value inside a provider
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
      <Count data={count}/>
    </CountContext.Provider>
       </>
  )
}
function Count({data}){
  return <div>
    <CountRenderer/>
    <Button data={count} setter={setCount}/>
  </div>
}
function CountRenderer(){
  const data=useContext(CountContext);
  return <div>
    {data}
  </div>
}
function Button({data,setter}){
  const data=useContext(CountContext)
    return <div>
      <button onClick={()=>{setter(data+1)}}>Inc</button>
      <button onClick={()=>{setter(data-1)}}>Dec</button>
    </div>
}
export default App
