const counterValueSpan = document.getElementById('value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrement.addEventListener("click", (event) => {
    counterValue -= 1;
    updateCounterValue();
});

increment.addEventListener("click", (event) => {
    counterValue += 1;
    updateCounterValue();
});

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}