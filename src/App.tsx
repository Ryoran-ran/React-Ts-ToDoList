import { useState } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue === '') return;
    setTasks([...tasks, inputValue]);
    setInputValue('');
  }

  return (
    <>
      <h2>ToDoリスト</h2>
      {/* 入力部 */}
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="タスクを入力してください" />
        <button onClick={addTask}>追加</button>
      </div>

      {/* タスク表示部 */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button>完了</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
