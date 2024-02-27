
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
