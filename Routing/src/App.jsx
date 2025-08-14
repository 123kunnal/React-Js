import { useState } from 'react'
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";


import './App.css'
import { Landing } from './components/landing'
import { Dashboard } from './components/Dashboard'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar(){
const navigate = useNavigate();//can only be invoked and used inside BrowserRoute
return <div>
     <div>
        <button onClick={() => {
           navigate("/")
          //window.location.href = "/" loads all data again
        }}>Landing</button>
        <button onClick={() => {
          navigate("/dashboard")
          // window.location.href = "/dashboard"
        }}>Dashboard</button>
      </div>
</div>
}
export default App;