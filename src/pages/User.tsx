import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { usersApi } from "../api";

import { limit } from "../constants";

import {TodoList} from "../components/TodoList/TodoList";
import { Pagination } from "../components/Pagination/Pagination";

import type { TodoType, UserType } from "../types/types";

function User() {

  const [user, setUser] = useState<UserType>();
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [totalCount, setTotalCount] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const { id } = useParams();

  const changePage = (page: number) => {
    setPage(page);
  }
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${usersApi}/${id}`);
        setUser(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTodos = async (limit: number, page: number) => {
      try {
        const response = await fetch(`${usersApi}/${id}/todos?&_limit=${limit}&_page=${page}`);
        setTotalCount(response.headers.get('x-total-count'));
        setTodos(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
    fetchTodos(limit, page);
  }, [id, page]);

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
        <TodoList todos={todos} setTodos={setTodos}/>
        <Pagination totalCount={totalCount} limit={limit} changePage={changePage} />
      </main>
    </>
  );
}

export default User;
