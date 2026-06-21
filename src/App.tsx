import { useState } from 'react'

import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  return (
    <>
      <h1>ToDoリスト</h1>
      {/* 入力部 */}
      <div>
        <input type="text" placeholder="タスクを入力してください" />
        <button>追加</button>
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
