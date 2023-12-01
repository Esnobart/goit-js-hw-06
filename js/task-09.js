const widget = document.querySelector('.widget')
const colorText = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', () => {
  const randomCol = getRandomHexColor();

  document.body.style.backgroundColor = randomCol;
  colorText.textContent = randomCol;
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
