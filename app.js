const card = document.querySelector(".card");
const button = document.querySelector(".in");
const inputs = document.querySelector(".input");
let names = ["gillfoyle", "dinesh", "richard", "eric bachman"];

function hey() {
  button.addEventListener("click", () => {
    alert("not working");
  });
}
hey();

fetch(
  "http://api.giphy.com/v1/gifs/search?q=siliconvalleyhbo-hbo-silicon-valley-26BRHShX4LVisG5Nu&api_key=thJwuHYzQnPWuNd6fVc1wBoeg9blSd7J&limit=3"
)
  .then(response => response.json())
  .then(arr => generate(arr.data));

function generate(data) {
  const option = data.map(
    item => `
    <img src='${item.images.original.url}'>
    `
  );
  card.innerHTML = option;
}
