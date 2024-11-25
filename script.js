// JavaScript to handle form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission for validation
    const form = event.target;
    
    // Check if form is valid
    if (form.checkValidity()) {
      alert('Form submitted successfully!');
      form.reset(); // Reset the form after successful submission
    } else {
      event.stopPropagation();
    }
    
    // Add bootstrap validation styles
    form.classList.add('was-validated');
  });