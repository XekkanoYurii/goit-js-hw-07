function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
function createBoxes() {
  const amount = Number(input.value);
  if(amount <= 0 || amount > 100) {
    return;
  }
  const items = [];
  boxes.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const item = document.createElement('div');
    item.style.width = `${size + i * 10}px`;
    item.style.height = `${size + i * 10}px`;
    item.style.backgroundColor = getRandomHexColor();
    items.push(item);
  }
  boxes.append(...items);
  input.value = '';
}
function destroyBoxes() {
  boxes.innerHTML = '';
}