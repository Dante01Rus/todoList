import "./TodoList.css";
import { TodoType } from "../../types/types";
import { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";

type TodoListType = {
  todos: TodoType[];
}

export function TodoList({ todos }: TodoListType): JSX.Element {

  const [todoList, setTodoList] = useState(todos);

  const deleteTodoItem = (todoId: number) => {
    setTodoList(todoList.filter((todo: TodoType) => todo.id !== todoId));
  }

  return (
    <>
      {todoList && (
        <ul className="todo-list">
          <h3>TODOS</h3>
          {todoList.map((todo: TodoType) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodoItem} />
          ))}
        </ul>
      )}
    </>
  )
}