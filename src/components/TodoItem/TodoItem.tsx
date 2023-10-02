import { TodoType } from "../../types/types";
import { useState } from "react";

type TodoItemTypes = {
  todo: TodoType;
  deleteTodo: Function;
}

export function TodoItem({ todo, deleteTodo }: TodoItemTypes): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <li className="todo-item" key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} />
        {todo.title}
      </label>
      <button onClick={() => setModalVisible(!modalVisible)} className="todo-delete" type="button">Delete</button>
      {
        modalVisible && <div className="todo-modal">
          <div className="todo-modal-wrapper">
            <button onClick={() => {
              deleteTodo(todo.id);
              setModalVisible(false);
            }}
              className="todo-approve"
            >Yes</button>
            <button onClick={() => setModalVisible(!modalVisible)} className="todo-cancel">No</button>
          </div>
        </div>
      }
    </li>
  )
}