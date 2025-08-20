import { useContext } from 'react'
// import { CountContext } from './components/Context'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from 'recoil'
import { countAtom, evenselector } from './store/atom/count'

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
  
   const  setCount = useSetRecoilState(countAtom);
   const isEven=useRecoilValue(evenselector);
  return (
    <div>
      <button onClick={() => setCount(count=>count + 1)}>Inc</button>
      {isEven?"im even":"im odd"}
      <button onClick={() => setCount(count=>count - 1)}>Dec</button>
    </div>
  )
}

export default App
