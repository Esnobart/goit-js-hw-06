const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    output.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});