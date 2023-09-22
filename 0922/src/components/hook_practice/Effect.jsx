import { useEffect, useState } from "react";
import { SideEffect } from "./SideEffect";
export const Effect = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  useEffect(() => {
    console.log("렌더링 완료");
    console.log(`이메일: ${email} 패스워드: ${password}`);
  }, [password]);

  let message = "React 프로그램";

  return (
    <>
      <div className="container">
        <SideEffect message={message} />
      </div>
      <div className="container">
        <div>
          <input type="text" value={email} onChange={changeEmail}></input>
          <input
            type="password"
            value={password}
            onChange={changePassword}
          ></input>
        </div>
        <hr />
        <div>
          <span>이메일 : {email}</span>
          <span>패스워드 : {password}</span>
        </div>
      </div>
    </>
  );
};
