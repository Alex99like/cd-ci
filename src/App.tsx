import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [count, setCount] = useState<number>(0)

  const handler = () => setCount((prev) => prev + 1)

  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Header/>
      <h1 
        style={{fontSize: 100, cursor: 'pointer'}} 
        onClick={handler}
      >Click me: {count}</h1>
    </div>
  );
}

export default App;
