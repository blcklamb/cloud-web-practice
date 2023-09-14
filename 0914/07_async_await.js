const URL = "https://jsonplaceholder.typicode.com/posts";
const myFunc = async () => {
  const res = await fetch(`${URL}/1`);
  const resJSON = await res.json();
  console.log(resJSON);

  const putData = { title: "after put", body: "after put", userId: 2 };
  const res2 = await fetch(`${URL}/1`, {
    method: "PUT",
    body: JSON.stringify(putData),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const res2JSON = await res2.json();
  console.log(res2JSON);
};

myFunc();
