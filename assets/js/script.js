function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Speichern des Modus im Local Storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Prüfen, ob der Dark Mode aktiviert sein soll
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}


// // Initialize EmailJS with your User ID
// (function() {
//   emailjs.init({publicKey:'gibiCDsv4kmKQD_Qo',});
// })();

// // Event Listener for the contact form
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent default form submission

//   // Send the form using EmailJS
//   emailjs.sendForm('service_njl58qs', 'template_q2t9ajk', this)
//       .then(function() {
//           alert('Message successfully sent!');
//       }, function(error) {
//           alert('Failed to send message. Please try again.');
//       });
// });


// // Initialize EmailJS with your User ID
// (function () {
//   emailjs.init('gibiCDsv4kmKQD_Qo');
// })();

// // Event Listener for the contact form
// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent default form submission

//   // Send the form using EmailJS
//   emailjs.sendForm('service_njl58qs', 'template_q2t9ajk', this)
//     .then(function () {
//       alert('Message successfully sent!');
//       document.getElementById('contact-form').reset();
//     }, function (error) {
//       alert('Failed to send message. Please try again.');
//     });
// });

// Initialize EmailJS with your User ID
(function () {
  emailjs.init('gibiCDsv4kmKQD_Qo');
})();

// Event Listener for the contact form
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Email validation
  const emailField = document.getElementById('email');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailField.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Send the form using EmailJS
  emailjs.sendForm('service_njl58qs', 'template_q2t9ajk', this)
    .then(function () {
      alert('Message successfully sent!');
      document.getElementById('contact-form').reset(); // Reset the form after successful submission
      document.getElementById('charCount').textContent = '400 characters remaining'; // Reset character count
    }, function (error) {
      alert('Failed to send message. Please try again.');
    });
});

// Character count for message field
document.getElementById('message').addEventListener('input', function () {
  const maxLength = 1000;
  const currentLength = this.value.length;
  const remaining = maxLength - currentLength;
  document.getElementById('charCount').textContent = remaining + ' characters remaining';
});
