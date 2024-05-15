document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formcontato__form');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', (event) => {
        let valid = true;

        document.querySelectorAll('.error').forEach(el => el.remove());

        if (nome.value.trim() === '') {
            showError(nome, 'Nome é obrigatório.');
            valid = false;
        }

        if (email.value.trim() === '') {
            showError(email, 'Email é obrigatório.');
            valid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Por favor, insira um email válido.');
            valid = false;
        }

        if (assunto.value.trim() === '') {
            showError(assunto, 'Assunto é obrigatório.');
            valid = false;
        }

        if (mensagem.value.trim() === '') {
            showError(mensagem, 'Mensagem é obrigatória.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
