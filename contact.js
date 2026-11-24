// contact.js
// Checks the contact form, then shows the confirmation modal.
// Note: this site has no server, so the message isn't actually sent anywhere.

const form = document.getElementById('contactForm');
const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Show Bootstrap's red/green field styling
    form.classList.add('was-validated');

    // Stop here if any required field is empty or invalid
    if (!form.checkValidity()) {
        return;
    }

    // Put the visitor's first name in the modal and show it
    const firstName = document.getElementById('firstName').value.trim();
    document.getElementById('confirmName').textContent = firstName;
    confirmModal.show();

    // Clear the form for the next message
    form.reset();
    form.classList.remove('was-validated');
});
