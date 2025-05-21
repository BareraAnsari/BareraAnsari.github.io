// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (hamburger && navLinks) {
        function toggleMenu() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        }
        
        // Click event for desktop/mobile
        hamburger.addEventListener('click', toggleMenu);
        
        // Touch event for mobile
        hamburger.addEventListener('touchstart', function(e) {
            e.preventDefault();
            toggleMenu();
        });
        
        // Close menu when clicking on links (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.classList.remove('menu-open');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});
