import { useRef } from 'react'
import { useStore, actions } from './store'

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))

    inputRef.current.focus()
  }
  
  const handleDelete = (i) => {
    dispatch(actions.deleteTodo(i))
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={state.todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>
            {todo}
            <span onClick={() => handleDelete(i)}>
              &times;
            </span>
          </li>
        })}
      </ul>
    </div>
  )
}

export default App