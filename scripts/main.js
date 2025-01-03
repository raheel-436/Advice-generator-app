const adviceId = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-body");
const dice = document.querySelector("#dice");

const url = "https://api.adviceslip.com/advice";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const { id, advice } = data.slip;

    adviceId.innerText = `ADVICE #${id}`;
    adviceText.innerText = advice;
  } catch (error) {
    console.error(`Error while fetching Data: ${error}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchData(url);
});

dice.addEventListener("click", () => {
  fetchData(url);
});
