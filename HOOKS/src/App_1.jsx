import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
 const a = useRef(0);
// useRef() is a React Hook that returns a mutable object that stays the same between renders:
// Unlike useState, updating useRef.current does NOT trigger a re-render.
  useEffect(() => {
    a.current = a.current + 1;
    console.log("Render count:", a.current);
  }, []);


  useEffect(() => {
    console.log("🔁 Runs on every render");
  });

  useEffect(() => {
    console.log("✅ Runs once on mount");
    return () => console.log("🧹 Cleanup of once effect");
  }, []);

  useEffect(() => {
    console.log(`🎯 Runs on count change: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
