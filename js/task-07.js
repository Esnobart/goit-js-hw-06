const fontSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSize.addEventListener('input', (event) => {
    const fontSize = event.target.value + 'px';
    text.style.fontSize = fontSize;
});