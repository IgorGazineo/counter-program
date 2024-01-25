let number = 0;

const contentElement = document.querySelector("h1");
const subButton = document.querySelector("#sub");
const resetButton = document.querySelector("#reset");
const addButton = document.querySelector("#add");

subButton.addEventListener("click", () => {
  number--;
  contentElement.innerHTML = number;
  console.log(number);
});

addButton.addEventListener("click", () => {
  number++;
  contentElement.innerHTML = number;
});

resetButton.addEventListener("click", () => {
  number = 0;
  contentElement.innerHTML = number;
});
