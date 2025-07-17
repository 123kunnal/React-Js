import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <CardWrapper>
        Hi there
        </CardWrapper>
    </div>
  );
}



function CardWrapper({ children}) {
  return (
    <div style={{     border: '2px solid #333 '   }}>
      {children}
    </div>
  );
}

export default App;
