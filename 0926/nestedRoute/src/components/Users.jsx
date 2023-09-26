import { Link, Outlet } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <div>
      <h1>사용자 (Users)</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={user.id}>{user.userName}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Users;
