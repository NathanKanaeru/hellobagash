  // Toggle Password Visibility
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.textContent = '🙈';  // Mata tertutup
    } else {
        passwordInput.type = 'password';
        passwordIcon.textContent = '👁️';  // Mata terbuka
    }
});

// Toggle Confirm Password Visibility
document.getElementById('toggle-confirm-password').addEventListener('click', function() {
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordIcon = document.getElementById('confirm-password-icon');

    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        confirmPasswordIcon.textContent = '🙈';  // Mata tertutup
    } else {
        confirmPasswordInput.type = 'password';
        confirmPasswordIcon.textContent = '👁️';  // Mata terbuka
    }
});