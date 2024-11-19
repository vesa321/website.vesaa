(function () {
    emailjs.init('kZQlRhgyPWZpQBcd2'); // Replace with your EmailJS Public Key
  })();

  const form = document.getElementById('contactForm');
  const messageDiv = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs
      .send('service_l3752wn', 'template_8vhd6mm', {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function () {
          // Show success message
          messageDiv.style.display = 'block';
          messageDiv.textContent = 'Message sent successfully!';
          messageDiv.classList.remove('error');
          form.reset();
        },
        function (error) {
          // Show error message
          messageDiv.style.display = 'block';
          messageDiv.textContent = 'Failed to send message. Please try again.';
          messageDiv.classList.add('error');
        }
      );
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });