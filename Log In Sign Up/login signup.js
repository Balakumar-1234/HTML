// script.js
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

showSignup.addEventListener('click', () => {
    loginForm.style.transform = 'rotateY(180deg)';
    signupForm.style.transform = 'rotateY(0deg)';
});

showLogin.addEventListener('click', () => {
    loginForm.style.transform = 'rotateY(0deg)';
    signupForm.style.transform = 'rotateY(-180deg)';
});
