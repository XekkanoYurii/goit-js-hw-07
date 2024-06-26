function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let color;
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");
const handleClick = () => {
  color = getRandomHexColor();
  console.log(color);
  body.style.backgroundColor = color;
  span.textContent = color;
};
button.addEventListener("click", handleClick);