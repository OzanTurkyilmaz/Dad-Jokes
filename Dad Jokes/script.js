const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
btn.addEventListener("click", getJokes);
text.innerHTML = " ";

async function getJokes() {
  const url = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json"
    }
  });
  const urlJSON = await url.json();
  text.innerText = urlJSON.joke
}
