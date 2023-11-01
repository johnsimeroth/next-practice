import TodoList from '@/app/ui/TodoList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoList />
    </main>
  )
}
