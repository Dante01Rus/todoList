import { mainApi } from "../../api";

export const deleteTodoItem = async (todoId: number) => {
    try {
      fetch(`${mainApi}/posts/${todoId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }
  }