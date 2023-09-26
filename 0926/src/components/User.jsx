import { Link, Outlet, useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>사용자 아이디: {userId}</h2>
      <ul>
        <li>
          <Link to="profile">프로필 Profile</Link>
        </li>
        <li>
          <Link to="account">계정 Account</Link>
        </li>
        <li>
          <Link to="/users">사용자 (Users) 페이지로 이동</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default User;
