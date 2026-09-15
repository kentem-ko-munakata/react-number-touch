import { useRef, useState } from 'react';
import './App.css';
import { StartTimeButton } from '@/components/StartTimeButton/StartTimeButton';

function App() {
  const [time, setTime] = useState(0);
  const timerIdRef = useRef<number | null>(null);

  const onStartTime = () => {
    // 前回のタイマー停止
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current);
    }

    // カウントリセット
    setTime(0);

    // 新しいタイマー開始（0.1秒単位）
    timerIdRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 100);
    console.log(`timerIdRef: ${timerIdRef.current}`);
  };

  return (
    <div className='app'>
      <div>{(time / 10).toFixed(1)}</div>
      <StartTimeButton onStartTime={onStartTime} />
    </div>
  );
}
export default App;
