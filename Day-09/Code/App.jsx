import React from 'react';
import useCounter from './useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🔁 Custom Hook Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
