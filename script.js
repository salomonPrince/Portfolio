
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(function(skill) {
        skill.addEventListener('click', function() {
            // Remove active class from all skills
            skillItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Add active class to clicked skill
            skill.classList.add('active');

            // Display image for 3 seconds
            setTimeout(function() {
                skill.classList.remove('active');
            }, 3000);
        });
    });
});

// validation for the contact form

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Get error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        // Reset previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email address';
            return;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            return;
        }

        // If all validation passes, submit the form
        form.submit();
    });
});

