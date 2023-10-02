import "./TodoList.css";
import { TodoType } from "../../types/types";

type TodoListType = {
  todos: TodoType[];
}

export function TodoList({todos}: TodoListType) {
  return (
    <>
      {todos && (
        <ul className="todo-list">
          <h3>TODOS</h3>
          {todos.map((todo: TodoType) => (
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