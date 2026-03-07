const jokeElement = document.getElementById("joke");
const jokebutton = document.getElementById("newJoke");

jokebutton.addEventListener("click", getJoke);

//getJoke();

function getJoke() {
  // jokeElement.textContent = "Joke incoming...";

  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Oh no! Network Failure");
      }
      return response.json();
    })
    .then((data) => {
      jokeElement.textContent = data.joke;
    })
    .catch((error) => {
      console.error(error);
      jokeElement.textContent = "Oh no! The joke failed. Try again.";
    });
}
