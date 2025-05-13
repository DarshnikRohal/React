import { useState } from "react";

export default function App() {
  const [count,setCount]=useState(0);
  function onClickhandler(){
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={onClickhandler}>Counter {count}
      </button>
    </div>
  );
}



