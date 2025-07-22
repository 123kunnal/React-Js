import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// React doesn’t let you directly access the DOM normally. 
// But with useRef, you can get a reference to an element.
const btnRef=useRef()
useEffect(()=>{
  btnRef.style.background="red"
})
// The main reason we use useEffect here is that refs (like inputRef.current) are only available 
// after the component has mounted and the DOM elements are rendered.

// If you tried to run inputRef.current.focus() outside of useEffect, 
// it would run during the render phase—before the DOM is attached—so inputRef.current 
// would be null, and you'd get an error.
  return (
    <>
     <button ref={btnRef} >Hello there</button>
    </>
  )
}

export default App
