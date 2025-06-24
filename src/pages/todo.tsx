import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "JS復習", done: false },
    { id: 2, text: "TS型理解", done: false },
  ]);

  const toggleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <h2>やることリスト</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => toggleDone(task.id)}>
              {task.done ? "戻す" : "完了"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
