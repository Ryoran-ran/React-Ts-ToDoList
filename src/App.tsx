import { useState } from 'react'
import './App.css'

import type { Task } from './type/tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue === '') return;
    setTasks([...tasks, { id: Date.now().toString(), text: inputValue, completed: false }]);
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
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} <button>完了</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
