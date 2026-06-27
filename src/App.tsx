import { useState ,useEffect } from 'react'
import './App.css'
import { saveTasksToLocalStorage
  , loadTasksFromLocalStorage
  , saveSettingToLocalStorage
  , loadSettingFromLocalStorage
} from './hooks/localstrage'
import type { Task ,Setting} from './type/tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')
  const [setting, setSetting] = useState<Setting>({ filter: 'all' });

  useEffect(() => {
    setTasks(loadTasksFromLocalStorage());
    setSetting(loadSettingFromLocalStorage());
  }, []);

  // タスク追加
  const addTask = () => {
    var newTask: Task = { id: Date.now().toString(), text: inputValue, completed: false };
    if (inputValue === '') return;
    setTasks([...tasks, newTask]);
    setInputValue('');
    saveTasksToLocalStorage([...tasks, newTask]);
    
  }

  // タスク完了/未完了切り替え
  const todoTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    saveTasksToLocalStorage(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  // タスク編集
  const editTask = (id: string) => {
    const taskToEdit = tasks.find(task => task.id === id);
    if (!taskToEdit) return;

    const newText = prompt('タスクを編集してください:', taskToEdit.text);
    if (newText === null) return;

    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    saveTasksToLocalStorage(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  }

  // タスク削除
  const deleteTask = (id: string) => {
    if (window.confirm('本当に削除しますか？')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
    saveTasksToLocalStorage(tasks.filter(task => task.id !== id));
  }

  //フィルター設定
  const handleFilterChange = (newFilter: Setting['filter']) => {
    setSetting({ ...setting, filter: newFilter });
    saveSettingToLocalStorage({ filter: newFilter });
  }

  return (
    <>
      <h2>ToDoリスト 表示：{setting.filter==='all' ? 'すべて' : setting.filter==='active' ? '未完了' : '完了'}</h2>
      {/* 入力部 */}
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="タスクを入力してください" />
        <button onClick={addTask}>追加</button>
      </div>

      {/* タスク数 */}
      <div>
        <p>タスク数: {tasks.length}</p>
        <p>未完了タスク数: {tasks.filter(task => !task.completed).length}</p>
        <p>完了タスク数: {tasks.filter(task => task.completed).length}</p>
      </div>
      {/* フィルタリング */}
      <div>
        <button onClick={() => handleFilterChange('all')}>すべて</button>
        <button onClick={() => handleFilterChange('active')}>未完了</button>
        <button onClick={() => handleFilterChange('completed')}>完了</button>
      </div>

      {/* タスク表示部 */}
      <ul>
        {tasks
        .filter((task) =>
          setting.filter === 'all' ||
          (setting.filter === 'active' && !task.completed) ||
          (setting.filter === 'completed' && task.completed)
        )
        .map((task) => (
          <li key={task.id}>
            {task.completed ? <s>{task.text}</s> : task.text}
            <button onClick={() => todoTask(task.id)}>
              {task.completed ? '未完了' : '完了'}
            </button>
            <button onClick={() => editTask(task.id)}>編集</button>
            <button onClick={() => deleteTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
