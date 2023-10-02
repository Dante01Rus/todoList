import { useState } from "react";

import { TodoType } from "../../types/types";

import { TodoItem } from "../TodoItem/TodoItem";

import "./TodoList.css";

type TodoListType = {
  todos: TodoType[];
}

export function TodoList({ todos }: TodoListType): JSX.Element {

  const [todoList, setTodoList] = useState(todos);

  const deleteTodoItem = (todoId: number) => {
    setTodoList(todoList.filter((todo: TodoType) => todo.id !== todoId));
  }

  if (!todoList) {
    return <h2>No items in TodoList</h2>;
  }

  return (
    <>
      {(
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