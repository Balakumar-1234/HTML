// script.js
const showFormButton = document.getElementById('show-form-button');
const formContainer = document.getElementById('form-container');

showFormButton.addEventListener('click', () => {
    // Remove the hidden class to display the form
    formContainer.classList.remove('hidden');

    // Trigger reflow to restart the animation
    void formContainer.offsetWidth;

    // Add the show class to animate the form
    formContainer.classList.add('show');
});
