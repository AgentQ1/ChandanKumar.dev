// Research-style Portfolio Handler
document.addEventListener('DOMContentLoaded', function() {
    const projectsList = document.getElementById('researchProjectsList');
    const filterBtns = document.querySelectorAll('.research-filter-btn');
    
    let currentFilter = 'all';

    // Render projects in research paper style
    function renderProjects(filter = 'all') {
        if (!projectsList) return;
        
        projectsList.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(p => p.category.includes(filter));
        
        filteredProjects.forEach((project, index) => {
            const projectCard = document.createElement('article');
            projectCard.className = 'research-project-card';
            projectCard.style.cssText = `
                margin-bottom: 2.5rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid var(--border-color);
                animation: fadeIn 0.5s ease ${index * 0.1}s both;
            `;
            
            // Build tech tags
            const techTags = project.technologies
                .map(tech => `<span style="display: inline-block; padding: 0.2rem 0.6rem; background: var(--bg-secondary); border-radius: 4px; font-size: 0.8rem; margin-right: 0.5rem; margin-bottom: 0.5rem;">${tech}</span>`)
                .join('');
            
            // Build highlights
            const highlights = project.highlights
                .map(highlight => `<li style="margin-bottom: 0.5rem; color: var(--text-secondary);">${highlight}</li>`)
                .join('');
            
            // Build links
            const links = [];
            if (project.links.github) {
                links.push(`<a href="${project.links.github}" target="_blank" style="color: var(--accent-primary); margin-right: 1.5rem; font-size: 0.95rem; font-weight: 500;">📁 GitHub →</a>`);
            }
            if (project.links.live) {
                links.push(`<a href="${project.links.live}" target="_blank" style="color: var(--accent-primary); margin-right: 1.5rem; font-size: 0.95rem; font-weight: 500;">🔗 Live Demo →</a>`);
            }
            if (project.links.paper) {
                links.push(`<a href="${project.links.paper}" target="_blank" style="color: var(--accent-primary); margin-right: 1.5rem; font-size: 0.95rem; font-weight: 500;">📄 Paper →</a>`);
            }
            
            projectCard.innerHTML = `
                <div style="display: flex; gap: 0.8rem; align-items: baseline; margin-bottom: 0.8rem;">
                    <h3 style="font-size: 1.3rem; font-weight: 600; margin: 0;">${project.title}</h3>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
                    <span>${project.date}</span>
                </div>
                
                <p style="color: var(--text-primary); line-height: 1.7; margin-bottom: 1rem; font-size: 0.95rem;">
                    ${project.description}
                </p>
                
                <div style="margin-bottom: 1rem;">
                    ${techTags}
                </div>
                
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem; font-size: 0.9rem;">
                    ${highlights}
                </ul>
                
                <div style="margin-top: 1rem;">
                    ${links.join('')}
                </div>
            `;
            
            projectsList.appendChild(projectCard);
        });
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Update active button styles
            filterBtns.forEach(b => {
                b.style.color = 'var(--text-secondary)';
                b.style.borderBottom = 'none';
                b.classList.remove('active');
            });
            
            this.style.color = 'var(--text-primary)';
            this.style.borderBottom = '2px solid var(--accent-primary)';
            this.classList.add('active');
            
            renderProjects(filter);
        });
    });

    // Initial render
    renderProjects();
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
