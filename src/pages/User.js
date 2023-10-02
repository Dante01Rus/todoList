import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usersApi } from "../api";
import {TodoList} from "../components/TodoList/TodoList";

function User() {
  const [user, setUser] = useState();
  const [todos, setTodos] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${usersApi}/${id}`);
        setUser(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTodos = async () => {
      try {
        const response = await fetch(`${usersApi}/${id}/todos`);
        setTodos(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
    fetchTodos();
  }, [id]);

  if (!user) {
    return <h2>No data</h2>;
  }

  return (
    <>
      <header>
        <Link to="/">Back</Link>
        <h2>{user.username}</h2>
        <p>{user.name}</p>
      </header>
      <main>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <TodoList todos={todos} />
      </main>
    </>
  );
}

export default User;
