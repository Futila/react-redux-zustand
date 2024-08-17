import { useAppSelector } from "../store"



export function TodoList() {
  const todos = useAppSelector((state) => {
    return state.todo
  })


  console.log(todos)

  return(
    <ul>
      {todos.map((todo) => <li key={todo}>{todo}</li>)}
    </ul>
  )
}