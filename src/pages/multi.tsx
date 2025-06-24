import { useState } from "react";

export default function Multi() {
  const [person, setPerson] = useState({
    name: "サンライズさん",
    age: 30,
  });

  const [fruits, setFruits] = useState(["🍎", "🍌"]);

  const handleClick = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const addFruit = () => {
    setFruits([...fruits, "🍇"]);
  };

  return (
    <div>
      <p>{person.name}（{person.age}歳）</p>
      <button onClick={handleClick}>1歳年を取る</button>
      <p>{fruits.join(" / ")}</p>
      <button onClick={addFruit}>ぶどう追加</button>
    </div>
  );
}