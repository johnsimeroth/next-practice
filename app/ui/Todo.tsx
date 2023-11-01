'use client';
import { Task } from '@/app/lib/definitions';
import TodoButton from '@/app/ui/TodoButton';

export default function Todo({ task }: { task: Task }) {
  function handleComplete () {
    console.log('completed!')
  }
  function handleDelete () {
    console.log('Deleted!')
  }
  function handleEdit () {
    console.log('Edited!')
  }

  return (
    <li className='border-solid border-2 my-1 rounded border-slate-400 p-2'>
      <span className='text-2xl'>{task.title}</span>
      <div>
        <TodoButton onClick={handleComplete}>Mark complete</TodoButton>
        <TodoButton onClick={handleDelete}>Delete</TodoButton>
        <TodoButton onClick={handleEdit}>Edit</TodoButton>
      </div>
    </li>
  );
}
