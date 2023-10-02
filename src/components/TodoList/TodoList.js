import "./TodoList.css"

export function TodoList({todos}) {
  return (
    <>
      {todos && (
        <ul className="todo-list">
          <h3>TODOS</h3>
          {todos.map((todo) => (
            <li className="todo-item">
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}