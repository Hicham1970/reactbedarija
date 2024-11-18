import { useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(0);

  const up = () => {
    setCounter((x) => x + 1);
  };
  const down = () => {
    setCounter((x) => x - 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </>
  );
}

//rfce
