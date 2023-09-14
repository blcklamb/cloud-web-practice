const URL = "https://jsonplaceholder.typicode.com/posts";

const GET_fetch = () => {
  fetch(`${URL}/1`)
    .then((res) => res.json())
    .then((json) => {
      console.log("=====GET=====");
      console.log(json);
    });
};

GET_fetch();

const POST_fetch = () => {
  const postData = { title: "foo", body: "bar", userId: 1 };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("=====POST=====");
      console.log(json);
    });
};

POST_fetch();

const PUT_fetch = () => {
  const putData = { title: "after put", body: "after put", userId: 2 };
  fetch(`${URL}/1`, {
    method: "PUT",
    body: JSON.stringify(putData),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("=====PUT=====");
      console.log(json);
    });
};

PUT_fetch();

const DELETE_fetch = () => {
  fetch(`${URL}/1`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("=====DELETE=====");
      console.log(json);
    });
};

DELETE_fetch();
