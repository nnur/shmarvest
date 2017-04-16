const signupForm = document.querySelector('#signup-form');
const inputs = [].slice.call(signupForm.querySelectorAll('.field input.required-input'));


signupForm.addEventListener('submit', (event) => {
  inputs
    .filter(input => input.value === "")
    .forEach(emptyInput => {
      emptyInput.parentNode.classList += ' fieldWithError';
      event.preventDefault();
    });
  
})