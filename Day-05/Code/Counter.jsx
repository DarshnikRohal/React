import { useState, useEffect } from "react";

const Counter = ({ initial }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("Counter component mounted");

    return () => {
      console.log("Counter component unmounted");
    };
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>🔢 Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
    </div>
  );
};

export default Counter;
