document.addEventListener('DOMContentLoaded', () => {
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const redirectMessage = document.getElementById('redirect-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            // Credenciais fixas para validação
            const validUsername = 'admin';
            const validPassword = 'password123';

            if (username === '' || password === '') {
                errorMessage.textContent = 'Todos os campos são obrigatórios.';
                errorMessage.style.color = 'red';
            } else if (username === validUsername && password === validPassword) {
                errorMessage.textContent = '';
                redirectMessage.textContent = 'Login bem-sucedido! Redirecionando...';
                redirectMessage.style.color = 'green';
                // Exibir mensagem de redirecionamento e redirecionar após 2 segundos
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                errorMessage.textContent = 'Credenciais inválidas. Tente novamente.';
                errorMessage.style.color = 'red';
            }
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    const contactErrorMessage = document.getElementById('contact-error-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            if (name === '' || email === '' || message === '') {
                contactErrorMessage.textContent = 'Todos os campos são obrigatórios.';
                contactErrorMessage.style.color = 'red';
            } else {
                contactErrorMessage.textContent = 'Mensagem enviada com sucesso!';
                contactErrorMessage.style.color = 'green';
            }
        });
    }
});
