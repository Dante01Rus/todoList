import { useCallback, useState } from "react";

import { TodoItem } from "../TodoItem/TodoItem";

import "./TodoList.css";

import type { TodoType } from "../../types/types";

type TodoListType = {
  todos: TodoType[];
}

export function TodoList({ todos }: TodoListType): JSX.Element {

  const [todoList, setTodoList] = useState(todos);

  const deleteTodoItem = useCallback((todoId: number) => {
    setTodoList(todoList.filter((todo: TodoType) => todo.id !== todoId));
  }, [setTodoList, todoList])

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