import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  }

  const handleReset = () => setCount(0);

  return (
    <div>
      <h1>カウント: {count} {count >= 10 && "🎉"}</h1>
      <button onClick={handleIncrement}>増やす</button>
      <button onClick={handleDecrement}>減らす</button>
      <button onClick={handleReset}>リセット</button>
    </div>
  );
}

export default Counter;