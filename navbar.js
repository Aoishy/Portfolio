// Navbar functionality
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link (mobile)
document.addEventListener('DOMContentLoaded', function() {
    // Create navbar HTML directly
    const navbarHTML = `
        <!-- Navigation Bar -->
        <nav class="navbar">
            <div class="nav-container">
                <a href="homepage.html" class="nav-logo">Me</a>
                
                <ul class="nav-menu">
                   
                    <li><a href="skills.html" class="nav-link">
                        <i class="fas fa-code"></i>
                        <span>Skills</span>
                    </a></li>
                    <li><a href="education.html" class="nav-link">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Education</span>
                    </a></li>
                    <li><a href="projects.html" class="nav-link">
                        <i class="fas fa-project-diagram"></i>
                        <span>Projects</span>
                    </a></li>
                    <li><a href="research.html" class="nav-link">
                        <i class="fas fa-microscope"></i>
                        <span>Research</span>
                    </a></li>
                </ul>

                <div class="nav-toggle" onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
    
    // Insert navbar into placeholder
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }
    
    // Add event listeners after navbar is loaded
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });
});

// Function to load navbar (keeping for compatibility)
function loadNavbar() {
    // This function is now handled by DOMContentLoaded above
}
