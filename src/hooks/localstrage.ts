import type { Task ,Setting} from '../type/tasks';

export function saveTasksToLocalStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage(): Task[] {
  const tasksJson = localStorage.getItem('tasks');
  return tasksJson ? JSON.parse(tasksJson) : [];
}

export function saveSettingToLocalStorage(setting: Setting): void {
  localStorage.setItem('setting', JSON.stringify(setting));
}

export function loadSettingFromLocalStorage(): Setting {
  const settingJson = localStorage.getItem('setting');
  return settingJson ? JSON.parse(settingJson) : { filter: 'all' };
}