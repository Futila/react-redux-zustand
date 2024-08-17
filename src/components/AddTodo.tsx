import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store"




export function AddTodo() {
  const [newTodo, setNewTodo] = useState("")

  const dispatch = useDispatch()

  function handleAddTodo(e: FormEvent){
    e.preventDefault()

    dispatch(add({
      newTodo
    }))

    setNewTodo("")
  }

  return(
    <form>
      <input value={newTodo} onChange={e => setNewTodo(e.target.value)} type="text" placeholder="adicionar todo"  />
      <button onClick={handleAddTodo}>Adicionar</button>
    </form>
  )
}