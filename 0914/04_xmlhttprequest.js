const URL = "https://jsonplaceholder.typicode.com/posts";

const EXAMPLE_xhr = () => {
  //1. 인스턴스 생성
  const xhr = new XMLHttpRequest();
  xhr.open("POST", URL);

  //2. 헤더값 설정
  xhr.setRequestHeader("content-type", "application/json");

  //3. 데이터 정의
  const data = {
    id: 2,
    title: "XMLHTTPReqeust",
    author: "Chaejung Kim",
  };

  //4. 요청 전송
  xhr.send(JSON.stringify(data));
};

const GET_xhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${URL}/1`);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      console.log(res);
      document.write(JSON.stringify(res) + "<br>");
    } else {
      console.error(xhr.status, xhr.statusText);
    }
  };
};

GET_xhr();

const POST_xhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", URL);
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));
  xhr.onload = () => {
    if (xhr.status === 201) {
      const res = JSON.parse(xhr.response);
      document.write(JSON.stringify(res));
    } else {
      console.error(xhr.status, xhr.statusText);
    }
  };
};

POST_xhr();

const PUT_xhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${URL}/1`);
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
  xhr.send(
    JSON.stringify({ title: "after put foo", body: "after put bar", userId: 1 })
  );
  xhr.onload = () => {
    if (xhr.status === 201) {
      const res = JSON.parse(xhr.response);
      document.write(JSON.stringify(res));
    } else {
      console.error(xhr.status, xhr.statusText);
    }
  };
};

PUT_xhr();
GET_xhr();

const DELETE_xhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${URL}/1`);
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      document.write(JSON.stringify(res));
    } else {
      console.error(xhr.status, xhr.statusText);
    }
  };
};

DELETE_xhr();
