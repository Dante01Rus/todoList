import { useCallback, useState } from "react";

import { mainApi } from "../../api";
import { TodoType } from "../../types/types";

type TodoItemTypes = {
  todo: TodoType;
  deleteTodo: (id: number) => void;
}

export function TodoItem({ todo, deleteTodo }: TodoItemTypes): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);

  const modalShowHandler = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const deleteTodoItem = async (todoId: number) => {
    try {
      fetch(`${mainApi}/posts/${todoId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }
  }

  const DeleteItem = useCallback(() => {
    deleteTodo(todo.id);
    deleteTodoItem(todo.id);
    modalShowHandler();
  }, [modalVisible])



  return (
    <li className="todo-item" key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} />
        {todo.title}
      </label>
      <button onClick={modalShowHandler} className="todo-delete" type="button">Delete</button>
      {
        modalVisible && <div className="todo-modal">
          <div className="todo-modal-wrapper">
            <button onClick={DeleteItem}
              className="todo-approve"
            >Yes</button>
            <button onClick={modalShowHandler} className="todo-cancel">No</button>
          </div>
        </div>
      }
    </li>
  )
}