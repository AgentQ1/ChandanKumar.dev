// ===========================
// Main JavaScript - Portfolio Website
// ===========================

// ===========================
// Theme Management
// ===========================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Initialize theme from localStorage or default to light
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
};

// Toggle theme
themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ===========================
// Navigation
// ===========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Mobile menu toggle
mobileMenuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===========================
// Typewriter Effect
// ===========================
const typewriter = document.getElementById('typewriter');
const texts = [
    'Full-Stack Engineer',
    'AI/ML Developer',
    'Cloud Infrastructure Specialist',
    'iOS Developer',
    'Product Leader'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

const type = () => {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
};

if (typewriter) {
    setTimeout(type, 1000);
}

// ===========================
// Portfolio Filter
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioGrid = document.getElementById('portfolioGrid');

// Render portfolio projects
const renderProjects = (filter = 'all') => {
    portfolioGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category.includes(filter));
    
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <div style="font-size: 4rem;">${project.icon}</div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <p class="project-date">${project.date}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                ${project.highlights ? `
                    <ul class="project-highlights">
                        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                ` : ''}
                <div class="project-links">
                    ${project.links.live ? `<a href="${project.links.live}" class="project-link" target="_blank">
                        View Live →
                    </a>` : ''}
                    ${project.links.github ? `<a href="${project.links.github}" class="project-link" target="_blank">
                        GitHub →
                    </a>` : ''}
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(projectCard);
    });
};

// Filter button click handlers
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ===========================
// Resume Timeline
// ===========================
const timeline = document.querySelector('.timeline');

const renderTimeline = () => {
    if (!timeline) return;
    
    resumeData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        let iconEmoji = '🎓';
        if (item.type === 'experience') iconEmoji = '💼';
        if (item.type === 'award') iconEmoji = '🏆';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <span class="timeline-date">${iconEmoji} ${item.date}</span>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-subtitle">${item.organization}${item.location ? ` - ${item.location}` : ''}</p>
                ${item.description ? `<p class="timeline-description">${item.description}</p>` : ''}
                ${item.highlights ? `
                    <div class="timeline-description">
                        <ul>
                            ${item.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
};

// ===========================
// Blog Posts
// ===========================
const blogGrid = document.getElementById('blogGrid');

const renderBlogPosts = () => {
    if (!blogGrid) return;
    
    blogPosts.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.style.animationDelay = `${index * 0.1}s`;
        
        blogCard.innerHTML = `
            <div class="blog-image">
                <div style="font-size: 3rem;">${post.icon}</div>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.readTime} read</span>
                    <span>•</span>
                    <span>${post.category}</span>
                </div>
                <h3 class="blog-title">
                    <a href="#blog/${post.slug}">${post.title}</a>
                </h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#blog/${post.slug}" class="read-more">
                    Read More →
                </a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
};

// ===========================
// Contact Form
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        projectType: document.getElementById('projectType').value,
        message: document.getElementById('message').value
    };
    
    // In production, send to backend API
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you within 24-48 hours.');
    
    // Reset form
    contactForm.reset();
});

// ===========================
// Newsletter Form
// ===========================
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // In production, send to backend API or email service
    console.log('Newsletter subscription:', email);
    
    // Show success message
    alert('Thanks for subscribing! You\'ll receive updates about new blog posts.');
    
    // Reset form
    newsletterForm.reset();
});

// ===========================
// Scroll Reveal Animation
// ===========================
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);

// ===========================
// Smooth Scroll for Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip empty hashes and blog links
        if (href === '#' || href.startsWith('#blog/')) return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Parallax Effect for Hero
// ===========================
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    if (!heroBackground) return;
    
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
});

// ===========================
// Initialize Everything
// ===========================
const init = () => {
    initTheme();
    renderProjects();
    renderTimeline();
    renderBlogPosts();
    highlightNavigation();
    
    // Add reveal class to elements that should animate on scroll
    const animateOnScroll = document.querySelectorAll(
        '.about-content, .project-card, .timeline-item, .blog-card'
    );
    animateOnScroll.forEach(el => el.classList.add('reveal'));
    
    // Trigger initial reveal check
    revealElements();
};

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===========================
// Performance Monitoring
// ===========================
window.addEventListener('load', () => {
    // Log performance metrics
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

// ===========================
// Easter Egg - Console Message
// ===========================
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cI see you\'re checking out the console. Want to collaborate? Let\'s connect!', 'font-size: 14px; color: #8b5cf6;');
console.log('%c🔗 GitHub: https://github.com/AgentQ1', 'font-size: 12px;');
console.log('%c📧 Email: Ckumar5@hawk.iit.edu', 'font-size: 12px;');
