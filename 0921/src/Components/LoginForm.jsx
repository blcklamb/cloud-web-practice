import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    // e.preventDefault();
    alert(`email: ${email} password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="text" value={email} onChange={handleEmail} />
      </div>
      <div>
        <label htmlFor="password">패스워드</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <button type="submit">전송</button>
    </form>
  );
};

export default LoginForm;
