// ============================================
// SANJAY RAJ M - PORTFOLIO JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. MOBILE NAVIGATION TOGGLE
    // ============================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ============================================
    // 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Get header height for offset
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink();
            }
        });
    });
    
    // ============================================
    // 3. ANIMATE SKILL BARS ON SCROLL
    // ============================================
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const level = skillBar.getAttribute('data-level');
                    
                    // Animate skill bar to its level
                    setTimeout(() => {
                        skillBar.style.width = level + '%';
                    }, 300);
                    
                    observer.unobserve(skillBar);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });
        
        skillBars.forEach(bar => {
            bar.style.width = '0%'; // Start from 0
            observer.observe(bar);
        });
    }
    
    // ============================================
    // 4. UPDATE ACTIVE NAV LINK ON SCROLL
    // ============================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // ============================================
    // 5. DOWNLOAD RESUME BUTTON
    // ============================================
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a temporary link for download
            const link = document.createElement('a');
            link.href = '#'; // Replace with actual resume URL
            link.download = 'Sanjay_Raj_Resume.pdf';
            link.target = '_blank';
            
            // Show message (replace with actual download in production)
            alert('Resume download would be enabled here. For now, please contact Sanjay directly for his resume.');
            
            // In production, uncomment below:
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
        });
    }
    
    // ============================================
    // 6. CONTACT FORM SUBMISSION
    // ============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll show a success message
            alert(`Thank you for your message, ${name}! This is a frontend demo. In a real application, this message would be sent to Sanjay's email.`);
            
            // Reset form
            this.reset();
            
            // Show success animation
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
    
    // ============================================
    // 7. ADD HOVER EFFECTS TO CARDS
    // ============================================
    function addCardHoverEffects() {
        const cards = document.querySelectorAll('.project-card, .skill-category, .cert-card, .strength-item, .info-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transition = 'all 0.3s ease';
            });
        });
    }
    
    // ============================================
    // 8. LAZY LOAD ANIMATIONS
    // ============================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .cert-card, .strength-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            observer.observe(element);
        });
    }
    
    // ============================================
    // 9. SOCIAL LINKS HOVER EFFECTS
    // ============================================
    function initSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.1)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // ============================================
    // 10. LOGO CLICK TO SCROLL TO TOP
    // ============================================
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================
    // 11. INITIALIZE ALL FUNCTIONS
    // ============================================
    function initPortfolio() {
        // Initialize animations
        animateSkillBars();
        initScrollAnimations();
        addCardHoverEffects();
        initSocialLinks();
        
        // Set initial active nav link
        updateActiveNavLink();
        
        // Add scroll event listener for active nav link
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Add resize event listener to handle mobile menu
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                if (menuToggle) {
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Add loading animation to page
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    // Start the portfolio
    initPortfolio();
    
    // ============================================
    // 12. CONSOLE GREETING (Optional)
    // ============================================
    console.log('%c👋 Hello! Welcome to Sanjay Raj\'s Portfolio', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
    console.log('%c💻 Built with HTML, CSS & JavaScript', 'color: #8b5cf6; font-size: 14px;');
    console.log('%c🚀 Portfolio successfully loaded!', 'color: #3b82f6; font-size: 14px;');
});