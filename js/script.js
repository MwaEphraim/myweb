/**
 * Interactive Client-Side Script
 * Activity 3 - ICT251 Web Technologies
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    initContactFormValidation();
    initGalleryViewer();
    initProjectSearchFilter();
    initMobileMenuToggle();
    initThemeSwitcher();
    initFAQAccordion();
});

/* ==========================================================================
   Compulsory Feature: Form Validation & Local Preview
   ========================================================================== */
function initContactFormValidation() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const messageInput = document.getElementById('user-message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const previewSection = document.getElementById('form-preview');
    const previewOutput = document.getElementById('preview-output');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent full page refresh

        // Reset error text
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        let isValid = true;

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        // 1. Whitespace / Blank Name Check
        if (nameValue === '') {
            nameError.textContent = 'Please enter your full name (whitespace only is invalid).';
            isValid = false;
        }

        // 2. Email Address Check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            emailError.textContent = 'Please enter your email address.';
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address format (e.g. name@domain.com).';
            isValid = false;
        }

        // 3. Message Check
        if (messageValue === '') {
            messageError.textContent = 'Please enter your message (whitespace only is invalid).';
            isValid = false;
        }

        // Render Summary Output cleanly
        if (isValid) {
            previewOutput.innerHTML = '';

            const nameEl = document.createElement('p');
            nameEl.textContent = `Name: ${nameValue}`;

            const emailEl = document.createElement('p');
            emailEl.textContent = `Email: ${emailValue}`;

            const msgEl = document.createElement('p');
            msgEl.textContent = `Message: ${msgValue}`;

            previewOutput.appendChild(nameEl);
            previewOutput.appendChild(emailEl);
            previewOutput.appendChild(msgEl);

            previewSection.classList.remove('hidden-element');
            form.reset();
        } else {
            previewSection.classList.add('hidden-element');
        }
    });
}

/* ==========================================================================
   Feature 1: Interactive Photo Gallery Viewer
   ========================================================================== */
function initGalleryViewer() {
    const photos = [
        { src: 'images/photos1.jpg', alt: 'Academic workspace setup', caption: 'My primary developer workspace for programming and engineering coursework.' },
        { src: 'images/photos2.jpg', alt: 'Code editor screen', caption: 'Analyzing code structures and algorithm performance.' },
        { src: 'images/photos3.jpg', alt: 'Group study session', caption: 'Collaborative development and technical projects.' }
    ];

    let currentIndex = 0;
    const imgEl = document.getElementById('gallery-img');
    const captionEl = document.getElementById('gallery-caption');
    const counterEl = document.getElementById('gallery-counter');
    const prevBtn = document.getElementById('prev-photo-btn');
    const nextBtn = document.getElementById('next-photo-btn');

    function updateGallery() {
        imgEl.style.opacity = '0';
        setTimeout(() => {
            imgEl.src = photos[currentIndex].src;
            imgEl.alt = photos[currentIndex].alt;
            captionEl.textContent = photos[currentIndex].caption;
            counterEl.textContent = `${currentIndex + 1} / ${photos.length}`;
            imgEl.style.opacity = '1';
        }, 200);
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
        updateGallery();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });
}

/* ==========================================================================
   Feature 2: Real-time Project Search Filter
   ========================================================================== */
function initProjectSearchFilter() {
    const searchInput = document.getElementById('project-search');
    const resetBtn = document.getElementById('reset-search-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const noResultsMsg = document.getElementById('no-results-msg');

    function filterProjects() {
        const query = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        projectCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardCategory = card.getAttribute('data-category').toLowerCase();

            if (cardText.includes(query) || cardCategory.includes(query)) {
                card.classList.remove('hidden-element');
                visibleCount++;
            } else {
                card.classList.add('hidden-element');
            }
        });

        if (visibleCount === 0) {
            noResultsMsg.classList.remove('hidden-element');
        } else {
            noResultsMsg.classList.add('hidden-element');
        }
    }

    searchInput.addEventListener('input', filterProjects);

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterProjects();
    });
}

/* ==========================================================================
   Feature 3: Mobile Drawer Menu Toggle
   ========================================================================== */
function initMobileMenuToggle() {
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('navbar');

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

/* Helper Feature: Light / Dark Theme Switcher */
function initThemeSwitcher() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });
}

/* Helper Feature: Accordion FAQ Toggle */
function initFAQAccordion() {
    const faqBtn = document.getElementById('faq-toggle-btn');
    const faqContent = document.getElementById('faq-content');

    faqBtn.addEventListener('click', () => {
        faqContent.classList.toggle('hidden-element');
    });
}