// Smooth scrolling to courses section
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Smooth scrolling to specific course section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Smooth scrolling to apply section
function scrollToApply() {
    document.getElementById('terms').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Parallax effect for courses section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxBg = document.querySelector('.parallax-bg');
    const coursesSection = document.querySelector('.courses-section');
    
    if (parallaxBg && coursesSection) {
        const sectionTop = coursesSection.offsetTop;
        const sectionHeight = coursesSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Check if the courses section is in viewport
        if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
            const speed = 0.5;
            parallaxBg.style.transform = `translateY(${(scrolled - sectionTop) * speed}px)`;
        }
    }
});

// Animate course cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add hover effects to course cards
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to learn more button
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            learnMoreBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                learnMoreBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add dynamic background color change based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll percentage
    const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
    
    // Change masthead overlay opacity based on scroll
    const mastheadOverlay = document.querySelector('.masthead-overlay');
    if (mastheadOverlay && scrollPosition < windowHeight) {
        const opacity = 0.8 + (scrollPosition / windowHeight) * 0.2;
        mastheadOverlay.style.background = `linear-gradient(135deg, rgba(0, 118, 192, ${opacity}), rgba(255, 140, 0, ${opacity * 0.75}))`;
    }
});
