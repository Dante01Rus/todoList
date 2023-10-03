import { mainApi } from "../../api";

export const deleteTodoItem = async (todoId: number) => {
    try {
      fetch(`${mainApi}/posts/${todoId}`, {
        method: 'DELETE',
      });
      console.log('deleted todo')
    } catch (error) {
      console.log(error);
    }
  }