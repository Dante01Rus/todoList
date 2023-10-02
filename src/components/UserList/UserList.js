import { Link } from "react-router-dom";
import "./UserList.css"

export function UserList({userList}) {
  return (
    <ul className="user-list">
      {userList.map((user) => (
        <li className="user-item" key={user.id}>
          <Link to={`/user/${user.id}`} >
            {user.name} aka {user.username}
          </Link>
        </li>
      ))}
    </ul>
  )
}