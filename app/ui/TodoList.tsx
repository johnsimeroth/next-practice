import { Task } from '@/app/lib/definitions';
import Todo from '@/app/ui/Todo';

const tasks: Task[] = [
  {title: 'make db', status: 'incomplete'},
  {title: 'seed db', status: 'incomplete'},
  {title: 'create fetching functions', status: 'incomplete'},
  {title: 'add todo fn', status: 'incomplete'},
  {title: 'delete todo fn', status: 'incomplete'},
  {title: 'edit todo fn', status: 'incomplete'},
]

export default function TodoList() {
  return (
    <ul>
      {tasks.map((task, i) => <Todo key={i} task={task} />)}
    </ul>
  )
}
