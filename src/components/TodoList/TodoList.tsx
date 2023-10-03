import { Dispatch, SetStateAction, useCallback, useState } from "react";

import { TodoItem } from "../TodoItem/TodoItem";

import "./TodoList.css";

import type { TodoType } from "../../types/types";

type TodoListType = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

export function TodoList({ todos, setTodos }: TodoListType): JSX.Element {

  const deleteTodoItem = useCallback((todoId: number) => {
    setTodos(todos.filter((todo: TodoType) => todo.id !== todoId));
  }, [setTodos, todos]);

  if (!todos) {
    return <h2>No items in Todos</h2>;
  }

  return (
    <>
      {(
        <ul className="todo-list">
          <h3>TODOS</h3>
          {todos.map((todo: TodoType) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodoItem} />
          ))}
        </ul>
      )}
    </>
  )
}