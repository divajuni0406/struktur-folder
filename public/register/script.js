// Visible & Unvisible Password
const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  const passwordConfirm = document.querySelector('#confirm_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const typePassword = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', typePassword);
    const typePasswordConfirm = passwordConfirm.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordConfirm.setAttribute('type', typePasswordConfirm);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});