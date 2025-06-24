import React from "react";

// 1. 子コンポーネント
function Greet({ name }: { name: string }) {
  return <p>こんにちは、{name}さん！</p>;
}

// 2. 親コンポーネント
export default function Hello() {
  return (
    <div>
      <h1>Reactの基本！</h1>
      <Greet name="サンライズ" />
      <Greet name="アサヒ" />
    </div>
  );
}