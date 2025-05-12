// ========== Main JavaScript for Y7Z GYM Website ==========
document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header ul');
    const header = document.querySelector('header');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking outside or on links
    document.addEventListener('click', function(e) {
        if (!header.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});