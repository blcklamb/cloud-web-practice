const URL = "https://jsonplaceholder.typicode.com/posts";

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${URL}/1`);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      return res;
    } else {
      console.error(xhr.status, xhr.statusText);
      return;
    }
  };
};
let resFromGetData = getData();

console.log("Promise 없는 요청");
console.log(resFromGetData);

const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${URL}/1`);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.response);
        resolve(res);
      } else {
        console.error(xhr.status, xhr.statusText);
        reject(new Error(xhr.statusText));
      }
    };
  });
};

console.log("Promise 있는 요청");
getDataPromise().then((res) => console.log(res));

const getDataFetch = () => {
  fetch(`${URL}/1`)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

console.log("Promise 없는 fetch");
getDataFetch();

const getDataFetchPromise = () => {
  // 숙제
  return new Promise((resolve, reject) => {
    fetch(`${URL}/1`)
      .then((res) => {
        if (res.ok) {
          resolve(res);
        } else {
          reject(new Error("response not ok"));
        }
      })
      .catch((error) => reject(new Error(error.message)));
  });
};
