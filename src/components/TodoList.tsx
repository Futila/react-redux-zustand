import { useSelector } from "react-redux"



export function TodoList() {
  const todos = useSelector((state) => {
    return state.todo
  })


  console.log(todos)

  return(
    <ul>
      {todos.map((todo) => <li key={todo}>{todo}</li>)}
    </ul>
  )
}