function validateLogin() {
  // Get the input values from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Get the error message element
  const errorMessage = document.getElementById('error-message');

  // Check if username and password are not empty
  if (username && password) {
      // Simulate a successful login by hiding the login form and showing the main content
      alert("Login Successful!");

      // Hide the login form
      document.getElementById('login-container').style.display = 'none';

      // Show the main content
      document.getElementById('main-content').style.display = 'block';
  } else {
      // If username or password is missing, display an error message
      errorMessage.textContent = "Please enter both username and password.";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav .nav-links li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetPage = e.target.getAttribute('href');
          window.location.href = targetPage;
      });
  });
});
