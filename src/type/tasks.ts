export type Task = {
  id: string
  text: string
  completed: boolean
};

export type Setting = {
    filter: 'all' | 'active' | 'completed'
}