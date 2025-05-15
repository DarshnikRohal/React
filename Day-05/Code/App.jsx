import { useState, useEffect } from "react";
import Counter from "./Counter";
import Message from "./Message";

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    console.log("App mounted!");

    return () => {
      console.log("App unmounted or re-rendered (cleanup)");
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>🧠 React Hooks Demo</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide" : "Show"} Counter
      </button>
      {showCounter && <Counter initial={0} />}
      <Message text="Keep Reacting!" />
    </div>
  );
};

export default App;

