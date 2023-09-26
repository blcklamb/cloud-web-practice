import "./App.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Account from "./components/Account";
import { v4 as uuid } from "uuid";
import Users from "./components/Users";

function App() {
  const users = [
    { id: uuid(), userName: "김아름" },
    { id: uuid(), userName: "이재원" },
    { id: uuid(), userName: "홍수진" },
  ];
  return (
    <Router>
      <div>
        <h3>중첩 라우팅</h3>
        <nav>
          <Link to="/home">홈</Link>
          <Link to="/users">사용자</Link>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route path=":userId" element={<User />}>
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
