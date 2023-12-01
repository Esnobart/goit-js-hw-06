const input = document.getElementById('validation-input');

input.addEventListener('blur', () => { 
    const inputLength = input.value.length;
    const dataValue = parseInt(input.getAttribute('data-length'));

    input.classList.remove('valid', 'invalid');

    if (inputLength === dataValue) {
       input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
});