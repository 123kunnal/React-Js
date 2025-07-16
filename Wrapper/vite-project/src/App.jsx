import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <CardWrapper innercomponent={TextComponent} />
    </div>
  );
}

function TextComponent() {
  return (
    <div>
      Hi there
    </div>
  );
}

function CardWrapper({ innercomponent: InnerComponent }) {
  return (
    <div style={{
      border: '2px solid #333',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '300px',
      margin: '20px auto',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <InnerComponent />
    </div>
  );
}

export default App;
