// ========================================
// SpeedWash Website JavaScript
// ========================================

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Update icon
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Update icon
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for contacting SpeedWash! We will get back to you within 24 hours.');
    
    // Reset form
    contactForm.reset();
});

// Newsletter Form Handling
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to a server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        form.reset();
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
const animatedElements = document.querySelectorAll('.service-card, .process-card, .testimonial-card, .pricing-card');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Book Now button handlers
const bookNowButtons = document.querySelectorAll('.btn-primary');
bookNowButtons.forEach(button => {
    if (button.textContent.includes('Book') || button.textContent.includes('Get Started') || button.textContent.includes('Choose Plan')) {
        button.addEventListener('click', (e) => {
            // If it's not a form submit button
            if (button.type !== 'submit') {
                e.preventDefault();
                // Scroll to contact form
                const contactSection = document.getElementById('contact');
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = contactSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Preload images
window.addEventListener('load', () => {
    console.log('SpeedWash website loaded successfully!');
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 968) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }, 250);
});

// Add cursor effect for interactive elements
document.addEventListener('mousemove', (e) => {
    const interactables = document.querySelectorAll('.btn, .service-card, .process-card');
    interactables.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        element.style.setProperty('--mouse-x', `${x}px`);
        element.style.setProperty('--mouse-y', `${y}px`);
    });
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Auto-scrolling services slider
const servicesSlider = document.querySelector('.services-slider');
if (servicesSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;
    let isPaused = false;

    // Auto-scroll function
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (!isPaused && !isDown) {
                const maxScroll = servicesSlider.scrollWidth - servicesSlider.clientWidth;
                
                if (servicesSlider.scrollLeft >= maxScroll) {
                    // Reset to beginning smoothly
                    servicesSlider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Scroll forward
                    servicesSlider.scrollBy({ left: 2, behavior: 'auto' });
                }
            }
        }, 30);
    }

    // Pause on hover
    servicesSlider.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    servicesSlider.addEventListener('mouseleave', () => {
        isPaused = false;
        servicesSlider.style.cursor = 'grab';
    });

    // Manual drag control
    servicesSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        isPaused = true;
        servicesSlider.style.cursor = 'grabbing';
        startX = e.pageX - servicesSlider.offsetLeft;
        scrollLeft = servicesSlider.scrollLeft;
    });

    servicesSlider.addEventListener('mouseup', () => {
        isDown = false;
        servicesSlider.style.cursor = 'grab';
        setTimeout(() => {
            isPaused = false;
        }, 1000);
    });

    servicesSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - servicesSlider.offsetLeft;
        const walk = (x - startX) * 2;
        servicesSlider.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    servicesSlider.addEventListener('touchstart', (e) => {
        isPaused = true;
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = servicesSlider.scrollLeft;
    });

    servicesSlider.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].pageX;
        const walk = (touchStartX - touchX) * 1.5;
        servicesSlider.scrollLeft = touchScrollLeft + walk;
    });

    servicesSlider.addEventListener('touchend', () => {
        setTimeout(() => {
            isPaused = false;
        }, 1000);
    });

    // Set initial cursor and start auto-scroll
    servicesSlider.style.cursor = 'grab';
    startAutoScroll();
}

// Console welcome message
console.log('%c Welcome to SpeedWash! ', 'background: #00D9FF; color: #09090B; font-size: 20px; padding: 10px;');
console.log('%c Fast, Reliable & Eco-Friendly Laundry Services in Kumasi ', 'font-size: 12px; color: #00D9FF;');

