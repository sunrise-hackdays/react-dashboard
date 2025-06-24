// src/pages/EventExample.tsx

import { useState } from "react";

export default function EventExample() {
  const [count, setCount] = useState(0); // 初期値は0

  const handleClick = () => {
    setCount(count + 1); // 状態を更新
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>カウント: {count}</h1>
      <button onClick={handleClick}>1増やす</button>
    </div>
  );
}