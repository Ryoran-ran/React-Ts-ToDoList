import { useState } from 'react'
import './App.css'

import type { Task } from './type/tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const addTask = () => {
    if (inputValue === '') return;
    setTasks([...tasks, { id: Date.now().toString(), text: inputValue, completed: false }]);
    setInputValue('');
  }

  const todoTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  const deleteTask = (id: string) => {
    if (window.confirm('本当に削除しますか？')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  }

  return (
    <>
      <h2>ToDoリスト</h2>
      {/* 入力部 */}
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="タスクを入力してください" />
        <button onClick={addTask}>追加</button>
      </div>

      {/* フィルタリング */}
      <div>
        <button onClick={() => setFilter('all')}>すべて</button>
        <button onClick={() => setFilter('active')}>未完了</button>
        <button onClick={() => setFilter('completed')}>完了</button>
      </div>

      {/* タスク表示部 */}
      <ul>
        {tasks
        .filter((task) =>
          filter === 'all' ||
          (filter === 'active' && !task.completed) ||
          (filter === 'completed' && task.completed)
        )
        .map((task) => (
          <li key={task.id}>
            {task.completed ? <s>{task.text}</s> : task.text}
            <button onClick={() => todoTask(task.id)}>
              {task.completed ? '未完了' : '完了'}
            </button>
            <button onClick={() => deleteTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
