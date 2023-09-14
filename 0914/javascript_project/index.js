const URL = "http://localhost:3000";

const postDiv = document.getElementById("post");
const GETPosts = async () => {
  const res = await fetch(`${URL}/posts`);
  const post = await res.json();
  postDiv.appendChild(listTitle(post));
};

const appendButton = (id) => {
  const editButton = document.createElement("button");
  editButton.textContent = "수정하기";
};

const listTitle = (post) => {
  const dataPostDiv = document.createElement("div");

  post.forEach((ele) => {
    const titleDiv = document.createElement("li");
    titleDiv.innerHTML = `${ele.title} <b>${ele.author}</b>`;
    const button = document.createElement("button");
    button.innerText = "수정하기";
    titleDiv.append(button);
    dataPostDiv.append(titleDiv);
  });

  return dataPostDiv;
};

GETPosts();

const GETComment = async (postId) => {
  const res = await fetch(`${URL}/comments?postId=${postId}`);
  const comment = await res.json();
  const liComment = document.createElement("li");
  liComment.innerHTML = listComment(comment);
  postDiv.appendChild(liComment);
};
const listComment = (comments) => {
  const comment = comments.map((ele) => `<li>${ele.body}</li>`).join("\n");
  return `<ul>${comment}</ul>`;
};

const POSTPost = async (params) => {
  const { title, author } = params;
  const postData = { title, author };
  await fetch(`${URL}/posts`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "content-type": "application/json; charset=UTF-8" },
  });
};

const postForm = document.querySelector("#post-form");
const postFormInput = document.querySelector("#post-form input");
const createPost = (event) => {
  event.preventDefault();
  POSTPost({ title: postFormInput.value, author: "blcklamb POST" });
};

postForm.addEventListener("submit", createPost);

const PUTPost = async (params) => {
  const { postId, title, author } = params;
  const putData = { title, author };
  await fetch(`${URL}/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify(putData),
    headers: { "content-type": "application/json; charset=UTF-8" },
  });
};

const DELETEPost = async (postId) => {
  await fetch(`${URL}/posts/${postId}`, {
    method: "DELETE",
  });
};
