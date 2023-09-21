import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`email: ${form.email} password: ${form.password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">패스워드</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">전송</button>
    </form>
  );
};

export default LoginForm;
