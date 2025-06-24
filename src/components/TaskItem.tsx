import { useEffect, useState } from "react";

type Props = {
  taskName: string;
};

export default function TaskItem({ taskName }: Props) {
  const [seconds, setSeconds] = useState(0); // 経過秒数
  const [isRunning, setIsRunning] = useState(false); // タイマーのON/OFF

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // クリーンアップ！
  }, [isRunning]);

  return (
    <div>
      <span>{taskName}：{seconds}秒</span>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "■ 停止" : "▶ 開始"}
      </button>
    </div>
  );
}