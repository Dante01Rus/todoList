import { Link } from "react-router-dom";

import { UserType } from "../../types/types";

import "./UserList.css";

type UserListType = {
  userList: UserType[];
}

export function UserList({ userList }: UserListType): JSX.Element {
  return (
    <ul className="user-list">
      {userList.map((user: UserType) => (
        <li className="user-item" key={user.id}>
          <Link to={`/user/${user.id}`} >
            {user.name} aka {user.username}
          </Link>
        </li>
      ))}
    </ul>
  )
}