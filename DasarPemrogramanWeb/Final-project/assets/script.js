document.addEventListener('DOMContentLoaded', function () {
    // Get all the links with an ID that starts with 'scroll'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Listen for click events
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Scroll to the target element
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});