const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

password.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        password.setCustomValidity('Passwords do not match');
    } else {
        password.setCustomValidity('');
    }
});

