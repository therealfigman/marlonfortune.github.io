// js/script.js
 

 // JavaScript form validation with Bootstrap
 const form = document.getElementById('blog-signup-form');
 const emailInput = document.getElementById('email');
 const firstNameInput = document.getElementById('firstName');
 const lastNameInput = document.getElementById('lastName');
 const addressInput = document.getElementById('address');
 const phoneInput = document.getElementById('phone');
 const formMessages = document.getElementById('form-messages');
 

 form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
 

  let isValid = true;
  let errors = []; // Array to store error messages
 

  // Validate First Name
  if (firstNameInput.value.trim() === '') {
  firstNameInput.classList.add('is-invalid');
  isValid = false;
  errors.push('Please enter your first name.');
  } else {
  firstNameInput.classList.remove('is-invalid');
  }
 

  // Validate Last Name
  if (lastNameInput.value.trim() === '') {
  lastNameInput.classList.add('is-invalid');
  isValid = false;
  errors.push('Please enter your last name.');
  } else {
  lastNameInput.classList.remove('is-invalid');
  }
 

  // Validate Email
  if (!isValidEmail(emailInput.value)) {
  emailInput.classList.add('is-invalid');
  isValid = false;
  errors.push('Please enter a valid email address.');
  } else {
  emailInput.classList.remove('is-invalid');
  }
 

  // Validate Address (Basic - Check if not empty)
  if (addressInput.value.trim() === '') {
  addressInput.classList.add('is-invalid');
  isValid = false;
  errors.push('Please enter your address.');
  } else {
  addressInput.classList.remove('is-invalid');
  }
 

  // Validate Phone Number (Optional - Using basic regex)
  if (phoneInput.value.trim() !== '' && !isValidPhone(phoneInput.value)) {
  phoneInput.classList.add('is-invalid');
  isValid = false;
  errors.push('Please enter a valid phone number (e.g., 868-456-7890).');
  } else {
  phoneInput.classList.remove('is-invalid');
  }
 

  if (!isValid) {
  formMessages.textContent = errors.join('<br>'); // Join errors with line breaks
  formMessages.style.color = 'red';
  return;
  }
 

  // If all validation passes, you would typically submit the form data
  // to a server here (e.g., using fetch or AJAX).
  // For this example, we'll just show a success message:
 

  formMessages.textContent = 'Thank you for subscribing! Check your inbox.';
  formMessages.style.color = 'green';
 });
 

 function isValidEmail(email) {
  // Basic email validation regex (can be improved)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
 }
 

 function isValidPhone(phone) {
  // Basic phone number validation regex (can be improved)
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Example: 123-456-7890
  return phoneRegex.test(phone);
 }