const API_KEY = "AIzaSyAlGBxJd2si3lzqE59lbiAm7KBkigPUT7I";
const card = document.querySelector(".card");
fetch(
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Lt6PPiTTwbE&key=AIzaSyAlGBxJd2si3lzqE59lbiAm7KBkigPUT7I"
)
  .then(response => response.json())
  //   .then(adds => console.log(adds.items[0].id))
  .then(arr => fetching(arr.items[0].id))
  .catch(error => console.log(error));

function fetching(data) {
  const html = `
  <iframe src="https://www.youtube.com/embed/${data}" ></iframe>
`;
  card.innerHTML = html;
}

// fetch()
