const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', () => {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passInput = this.elements.password;

    if (!emailInput.value || !passInput.value) {
        return 'Усі поля мають бути заповненними';
    } else {
        const data = {
            email: emailInput.value,
            password: passInput.value,
        }

        console.log(data);

        this.reset();
    }
});