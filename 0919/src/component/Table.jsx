function Table() {
  const member = [
    { name: "김창수", age: 32, gender: "남성", email: "cskim@naver.com" },
    { name: "이지수", age: 21, gender: "여성", email: "jslee@gmail.com" },
    { name: "박성희", age: 25, gender: "여성", email: "shpark@outlook.com" },
    { name: "이재원", age: 22, gender: "남성", email: "jwlee@kakao.com" },
  ];

  return (
    <div>
      <table>
        <tr>
          {Object.keys(member[0]).map((ele, idx) => (
            <th key={idx}>{ele}</th>
          ))}
        </tr>
        {member.map((ele, idx) => {
          const { name, age, gender, email } = ele;
          return (
            <tr key={idx}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{gender}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
