import { useState } from "react";
import TaskItem from "../components/TaskItem";

export default function TimerPage() {
  const [taskName, setTaskName] = useState(""); // 入力中のテキスト
  const [tasks, setTasks] = useState<string[]>([]); // タスクのリスト

  const handleAddTask = () => {
    if (taskName.trim() === "") return;
    setTasks([...tasks, taskName]);
    setTaskName("");
  };

  return (
    <div>
      <h2>タイマー付きToDoリスト</h2>

      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="やることを入力"
      />
      <button onClick={handleAddTask}>追加</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskItem taskName={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
