const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = this.elements.email.value;
    const passInput = this.elements.password.value;

    if (!emailInput || !passInput) {
        alert('Усі поля мають бути заповненними');
        return;
    } 
    const data = {
        email: emailInput,
        password: passInput,
    }

    console.log(data);
    
    event.currentTarget.reset();
    
});