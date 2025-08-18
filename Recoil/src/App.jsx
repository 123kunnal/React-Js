import { useContext } from 'react'
// import { CountContext } from './components/Context'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './store/atom/count'

function App() {
  

  return (
    <>
    <RecoilRoot>
  <Count />
  </RecoilRoot>
    </>
  )
}

function Count() {
  
  return (
    <div>
      
      
      <CountRenderer />
      <Button />
    </div>
  )
}

function CountRenderer() {
  const  count  = useRecoilValue(countAtom);
  return <div>{count}</div>
}

function Button() {
  const  [count,setCount]  =useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  )
}

export default App
