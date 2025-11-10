// ============================================
// LANGUAGE TRANSLATION
// ============================================
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_program: "Programme",
        nav_gallery: "Galerie",
        nav_contact: "Contact",
        nav_confirm: "Confirmer ma présence",
        hero_cta: "Découvrir le programme",
        intro_text: "Nous avons le plaisir de vous inviter à une soirée exclusive dédiée à la découverte des opportunités d'investissement immobilier aux Émirats arabes unis, organisée par Loft & Keys Properties.",
        about_p1: "Loft & Keys Properties propose une gamme complète de services immobiliers, conçus pour garantir un parcours d'investissement fluide et enrichissant.",
        about_p2: "Nous proposons des solutions d'investissement sur mesure pour garantir à nos clients des propriétés offrant le potentiel de rendement le plus élevé sur le marché immobilier florissant de Dubaï.",
        program_title: "JEUDI 27 NOV. 2025 | FLEUVE CONGO HÔTEL",
        timeline1_title: "Accueil et réseautage",
        timeline1_desc: "Profitez d'un moment convivial pour échanger avec d'autres investisseurs et nos experts.",
        timeline2_title: "Présentation de Loft & Keys Properties",
        timeline2_desc: "Découvrez notre agence, nos services sur mesure et les avantages d'investir à Dubaï.",
        timeline3_title: "Analyse du marché immobilier de Dubaï",
        timeline3_desc: "Plongée dans les tendances actuelles et les opportunités à saisir pour maximiser vos rendements.",
        timeline4_title: "Échange interactif : Comment réussir votre investissement ?",
        timeline4_desc: "Recevez des conseils pratiques et des stratégies d'investissement adaptés à votre profil.",
        timeline5_title: "Questions et réponses",
        timeline5_desc: "Une session ouverte pour répondre à toutes vos interrogations concernant nos offres et le marché.",
        timeline6_title: "Cocktail networking:",
        timeline6_desc: "Terminez la soirée autour d'un cocktail, tout en continuant à échanger avec nos experts et d'autres investisseurs.",
        gallery_title: "Découvrez l'événement",
        gallery1: "Soirée Exclusive",
        gallery2: "Hall d'accueil",
        gallery3: "Scène principale",
        gallery4: "Salle de conférence",
        gallery5: "Auditorium",
        gallery6: "Nos propriétés",
        gallery7: "Équipements de luxe",
        gallery8: "Intérieurs raffinés",
        contact_title: "Confirmez votre présence",
        contact_text: "Veuillez confirmer votre présence avant le 14 novembre 2025 en contactant notre équipe à l'adresse suivante :",
        contact_footer_text: "Nous avons hâte de vous rencontrer et de partager avec vous les possibilités d'investissement qui vous attendent à Dubaï.",
        signature_greeting: "Cordialement,",
        signature_role: "Président Directeur Général",
        form_title: "Formulaire de confirmation",
        form_name: "Nom complet",
        form_email: "Email",
        form_phone: "Téléphone",
        form_guests_label: "Nombre d'invités",
        form_guests_option: "Nombre d'invités",
        form_guest_1: "1 personne",
        form_guest_2: "2 personnes",
        form_guest_3: "3 personnes",
        form_guest_4: "4 personnes",
        form_message: "Message (optionnel)",
        form_submit: "Confirmer ma présence",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_event: "Événement",
        chatbot_welcome: "Bonjour ! 👋 Je suis votre assistant virtuel. Comment puis-je vous aider concernant notre soirée exclusive du 27 novembre 2025 ?"
    },
    en: {
        nav_home: "Home",
        nav_program: "Program",
        nav_gallery: "Gallery",
        nav_contact: "Contact",
        nav_confirm: "Confirm My Attendance",
        hero_cta: "Discover the Program",
        intro_text: "We are pleased to invite you to an exclusive evening dedicated to discovering real estate investment opportunities in the United Arab Emirates, organized by Loft & Keys Properties.",
        about_p1: "Loft & Keys Properties offers a comprehensive range of real estate services, designed to ensure a smooth and rewarding investment journey.",
        about_p2: "We offer tailor-made investment solutions to guarantee our clients properties offering the highest return potential in Dubai's thriving real estate market.",
        program_title: "THURSDAY NOV. 27, 2025 | FLEUVE CONGO HOTEL",
        timeline1_title: "Welcome and Networking",
        timeline1_desc: "Enjoy a friendly moment to connect with other investors and our experts.",
        timeline2_title: "Loft & Keys Properties Presentation",
        timeline2_desc: "Discover our agency, our customized services and the advantages of investing in Dubai.",
        timeline3_title: "Dubai Real Estate Market Analysis",
        timeline3_desc: "Dive into current trends and opportunities to seize to maximize your returns.",
        timeline4_title: "Interactive Exchange: How to Succeed in Your Investment?",
        timeline4_desc: "Receive practical advice and investment strategies tailored to your profile.",
        timeline5_title: "Questions and Answers",
        timeline5_desc: "An open session to answer all your questions about our offers and the market.",
        timeline6_title: "Networking Cocktail:",
        timeline6_desc: "End the evening over a cocktail, while continuing to interact with our experts and other investors.",
        gallery_title: "Discover the Event",
        gallery1: "Exclusive Evening",
        gallery2: "Reception Hall",
        gallery3: "Main Stage",
        gallery4: "Conference Room",
        gallery5: "Auditorium",
        gallery6: "Our Properties",
        gallery7: "Luxury Amenities",
        gallery8: "Refined Interiors",
        contact_title: "Confirm Your Attendance",
        contact_text: "Please confirm your attendance before November 14, 2025 by contacting our team at the following address:",
        contact_footer_text: "We look forward to meeting you and sharing with you the investment opportunities that await you in Dubai.",
        signature_greeting: "Best regards,",
        signature_role: "Chief Executive Officer",
        form_title: "Confirmation Form",
        form_name: "Full Name",
        form_email: "Email",
        form_phone: "Phone",
        form_guests_label: "Number of Guests",
        form_guests_option: "Number of Guests",
        form_guest_1: "1 person",
        form_guest_2: "2 people",
        form_guest_3: "3 people",
        form_guest_4: "4 people",
        form_message: "Message (optional)",
        form_submit: "Confirm My Attendance",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_event: "Event",
        chatbot_welcome: "Hello! 👋 I'm your virtual assistant. How can I help you regarding our exclusive evening on November 27, 2025?"
    }
};

let currentLang = 'fr';

function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update chatbot welcome message
    const chatbotFirstMessage = document.querySelector('.chatbot-message.bot-message p');
    if (chatbotFirstMessage && translations[lang].chatbot_welcome) {
        chatbotFirstMessage.textContent = translations[lang].chatbot_welcome;
    }
    
    // Update language button text
    const langBtn = document.querySelector('.lang-text');
    if (langBtn) {
        langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    }
}

// Language toggle button
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'fr';
    if (savedLang !== 'fr') {
        translatePage(savedLang);
    }
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            translatePage(newLang);
        });
    }
});

// ============================================
// NAVIGATION
// ============================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
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

// Elements to animate
const animatedElements = document.querySelectorAll(
    '.timeline-item, .gallery-item, .about-grid, .contact-content'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.guests) {
        showNotification('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showNotification('Veuillez entrer une adresse email valide', 'error');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
        showNotification('Veuillez entrer un numéro de téléphone valide', 'error');
        return;
    }
    
    // Simulate form submission (in real scenario, this would be sent to a server)
    showNotification('Merci! Votre confirmation a été envoyée avec succès.', 'success');
    
    // Log form data (for demonstration)
    console.log('Form submitted:', formData);
    
    // Create email body for mailto
    const subject = encodeURIComponent('Confirmation de présence - Soirée Loft & Keys');
    const body = encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.phone}\n` +
        `Nombre d'invités: ${formData.guests}\n` +
        `Message: ${formData.message || 'Aucun message'}\n\n` +
        `Je confirme ma présence à la soirée exclusive du 27 novembre 2025.\n\n` +
        `📍 Lieu: Fleuve Congo Hôtel`
    );
    
    // Open email client
    window.location.href = `mailto:info@loftandkeys.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setTimeout(() => {
        contactForm.reset();
    }, 1000);
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 20px 30px;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 400px;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ============================================
// GALLERY LIGHTBOX
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    });
});

function openLightbox(src, alt) {
    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create image
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 10px 50px rgba(0,0,0,0.5);
    `;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        background: white;
        border: none;
        font-size: 40px;
        color: #0d3d3d;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = '#d4a556';
        closeBtn.style.transform = 'rotate(90deg)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'white';
        closeBtn.style.transform = 'rotate(0deg)';
    });
    
    // Add elements
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Close lightbox
    const closeLightbox = () => {
        lightbox.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    };
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on ESC key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Add fadeIn/fadeOut animations
const animStyle = document.createElement('style');
animStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(animStyle);

// ============================================
// COUNTDOWN TIMER (Optional)
// ============================================
function updateCountdown() {
    const eventDate = new Date('2025-11-21T17:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // You can add a countdown display element in HTML and update it here
        console.log(`${days}j ${hours}h ${minutes}m ${seconds}s`);
    }
}

// Update countdown every second (uncomment if you add countdown display)
// setInterval(updateCountdown, 1000);

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// CHATBOT
// ============================================
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

// Base de connaissances pour le chatbot (multilingue)
const chatbotKnowledge = {
    fr: [
        {
            keywords: ["date", "quand", "événement", "evenement", "jour", "c'est quand", "quel jour", "when", "date"],
            response: "La soirée exclusive d'opportunité aura lieu le **27 novembre 2025** au Fleuve Congo Hôtel. 📅"
        },
        {
            keywords: ["lieu", "où", "ou", "adresse", "hôtel", "hotel", "endroit", "se déroule", "se deroule", "where", "location", "venue"],
            response: "L'événement se déroule au **Fleuve Congo Hôtel**. C'est un lieu prestigieux parfaitement adapté pour notre soirée exclusive. 🏨"
        },
        {
            keywords: ["horaire", "heure", "commence", "début", "debute", "quelle heure", "timing", "time", "start"],
            response: "La soirée débute à **17h00** avec l'accueil et le réseautage. 🕐"
        },
        {
            keywords: ["confirmer", "confirmation", "inscription", "réservation", "reservation", "présence", "presence", "participer", "m'inscrire", "confirm", "register"],
            response: "Pour confirmer votre présence, cliquez sur le bouton **'Confirmer ma présence'** en haut de la page ou rendez-vous dans la section Contact. Nous vous enverrons une confirmation par email. ✅"
        },
        {
            keywords: ["programme", "déroulement", "deroulement", "activités", "activites", "agenda", "planning", "program", "schedule"],
            response: "Le programme comprend :\n• 17h00 - Accueil et réseautage\n• 17h30 - Présentation de Loft & Keys\n• 18h00 - Analyse du marché\n• 18h30 - Échange interactif\n• 19h00 - Questions & Réponses\n• 19h30 - Cocktail networking 📋"
        },
        {
            keywords: ["investissement", "propriété", "propriete", "immobilier", "dubai", "émirats", "emirats", "projet", "opportunité", "opportunite", "investment", "property"],
            response: "Nous présentons des opportunités d'investissement immobilier exclusives aux Émirats Arabes Unis, avec un focus sur Dubai. Des projets offrant des rendements attractifs et un potentiel de plus-value élevé. 🏢"
        },
        {
            keywords: ["loft", "keys", "entreprise", "société", "societe", "agence", "qui êtes", "qui etes", "présentation", "company", "agency"],
            response: "Loft & Keys Properties est une agence immobilière spécialisée dans l'investissement immobilier à Dubai. Nous proposons des solutions sur mesure pour garantir un parcours d'investissement fluide et enrichissant. 🏘️"
        },
        {
            keywords: ["prix", "coût", "cout", "tarif", "gratuit", "payant", "combien", "price", "cost", "free"],
            response: "La participation à cet événement exclusif est **gratuite** sur invitation. Il suffit de confirmer votre présence. 🎟️"
        },
        {
            keywords: ["parking", "stationnement", "voiture", "garer", "se garer", "car"],
            response: "Un service de parking est disponible au Fleuve Congo Hôtel pour tous les participants. 🚗"
        },
        {
            keywords: ["tenue", "dress", "code", "vêtements", "vetements", "s'habiller", "habiller", "porter", "attire"],
            response: "La tenue recommandée est **Business Elegant** ou **Cocktail**. Venez dans une tenue professionnelle chic pour cette soirée exclusive. 👔"
        },
        {
            keywords: ["contact", "téléphone", "telephone", "email", "mail", "joindre", "contacter", "appeler", "phone"],
            response: "Vous pouvez nous contacter :\n📧 Email: info@loftandkeys.com\n📱 Téléphone: +971 4553 5283\nOu utilisez le formulaire de contact sur notre site. 📞"
        },
        {
            keywords: ["accompagnant", "invité", "invite", "plus un", "+1", "venir avec", "amener quelqu'un", "guest", "bring"],
            response: "Vous pouvez venir accompagné(e) d'un invité. Merci de le préciser lors de votre confirmation pour que nous puissions préparer votre accueil. 👥"
        },
        {
            keywords: ["bonjour", "salut", "hey", "coucou", "bonsoir", "hello", "hi"],
            response: "Bonjour ! 👋 Je suis ravi de vous aider. Que souhaitez-vous savoir sur notre soirée exclusive du 27 novembre ?"
        },
        {
            keywords: ["merci", "remercie", "thank", "cool", "super", "parfait", "thanks"],
            response: "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. 😊"
        },
        {
            keywords: ["rendement", "rentabilité", "rentabilite", "profit", "gain", "retour", "return", "yield"],
            response: "Nos propriétés à Dubai offrent des rendements attractifs, généralement entre 6% et 10% par an, avec un fort potentiel de plus-value. Nos experts vous présenteront les détails lors de la soirée. 💰"
        }
    ],
    en: [
        {
            keywords: ["date", "quand", "événement", "evenement", "jour", "c'est quand", "quel jour", "when"],
            response: "The exclusive opportunity evening will take place on **November 27, 2025** at the Fleuve Congo Hotel. 📅"
        },
        {
            keywords: ["lieu", "où", "ou", "adresse", "hôtel", "hotel", "endroit", "se déroule", "se deroule", "where", "location", "venue"],
            response: "The event takes place at the **Fleuve Congo Hotel**. It's a prestigious venue perfectly suited for our exclusive evening. 🏨"
        },
        {
            keywords: ["horaire", "heure", "commence", "début", "debute", "quelle heure", "timing", "time", "start"],
            response: "The evening starts at **5:00 PM** with welcome and networking. 🕐"
        },
        {
            keywords: ["confirmer", "confirmation", "inscription", "réservation", "reservation", "présence", "presence", "participer", "m'inscrire", "confirm", "register"],
            response: "To confirm your attendance, click on the **'Confirm My Attendance'** button at the top of the page or go to the Contact section. We will send you a confirmation email. ✅"
        },
        {
            keywords: ["programme", "déroulement", "deroulement", "activités", "activites", "agenda", "planning", "program", "schedule"],
            response: "The program includes:\n• 5:00 PM - Welcome and networking\n• 5:30 PM - Loft & Keys presentation\n• 6:00 PM - Market analysis\n• 6:30 PM - Interactive exchange\n• 7:00 PM - Q&A session\n• 7:30 PM - Networking cocktail 📋"
        },
        {
            keywords: ["investissement", "propriété", "propriete", "immobilier", "dubai", "émirats", "emirats", "projet", "opportunité", "opportunite", "investment", "property"],
            response: "We present exclusive real estate investment opportunities in the United Arab Emirates, with a focus on Dubai. Projects offering attractive returns and high appreciation potential. 🏢"
        },
        {
            keywords: ["loft", "keys", "entreprise", "société", "societe", "agence", "qui êtes", "qui etes", "présentation", "company", "agency", "who"],
            response: "Loft & Keys Properties is a real estate agency specialized in real estate investment in Dubai. We offer tailor-made solutions to ensure a smooth and rewarding investment journey. 🏘️"
        },
        {
            keywords: ["prix", "coût", "cout", "tarif", "gratuit", "payant", "combien", "price", "cost", "free"],
            response: "Participation in this exclusive event is **free** by invitation. You just need to confirm your attendance. 🎟️"
        },
        {
            keywords: ["parking", "stationnement", "voiture", "garer", "se garer", "car"],
            response: "Parking service is available at the Fleuve Congo Hotel for all participants. 🚗"
        },
        {
            keywords: ["tenue", "dress", "code", "vêtements", "vetements", "s'habiller", "habiller", "porter", "attire"],
            response: "The recommended dress code is **Business Elegant** or **Cocktail**. Come in chic professional attire for this exclusive evening. 👔"
        },
        {
            keywords: ["contact", "téléphone", "telephone", "email", "mail", "joindre", "contacter", "appeler", "phone"],
            response: "You can contact us:\n📧 Email: info@loftandkeys.com\n📱 Phone: +971 4553 5283\nOr use the contact form on our website. 📞"
        },
        {
            keywords: ["accompagnant", "invité", "invite", "plus un", "+1", "venir avec", "amener quelqu'un", "guest", "bring"],
            response: "You can bring a guest. Please mention it when confirming so we can prepare your welcome. 👥"
        },
        {
            keywords: ["bonjour", "salut", "hey", "coucou", "bonsoir", "hello", "hi"],
            response: "Hello! 👋 I'm happy to help you. What would you like to know about our exclusive evening on November 27?"
        },
        {
            keywords: ["merci", "remercie", "thank", "cool", "super", "parfait", "thanks"],
            response: "You're welcome! Don't hesitate if you have other questions. 😊"
        },
        {
            keywords: ["rendement", "rentabilité", "rentabilite", "profit", "gain", "retour", "return", "yield"],
            response: "Our properties in Dubai offer attractive returns, generally between 6% and 10% per year, with high appreciation potential. Our experts will present the details during the evening. 💰"
        }
    ]
};

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbot.classList.add('active');
    chatbotToggle.style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
    chatbot.classList.remove('active');
    chatbotToggle.style.display = 'flex';
});

// Fonction pour ajouter un message
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageP = document.createElement('p');
    messageP.innerHTML = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    
    messageDiv.appendChild(messageP);
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll vers le bas
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Fonction pour trouver une réponse
function findResponse(userMessage) {
    const normalizedMessage = userMessage.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Enlève les accents
        .replace(/['']/g, "'"); // Normalise les apostrophes
    
    // Utiliser la base de connaissances de la langue actuelle
    const currentKnowledge = chatbotKnowledge[currentLang] || chatbotKnowledge.fr;
    
    // Chercher une correspondance dans la base de connaissances
    for (const item of currentKnowledge) {
        for (const keyword of item.keywords) {
            const normalizedKeyword = keyword.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/['']/g, "'");
            
            if (normalizedMessage.includes(normalizedKeyword)) {
                return item.response;
            }
        }
    }
    
    // Message par défaut si aucune correspondance (bilingue)
    const defaultMessages = {
        fr: "Je suis désolé, je n'ai pas bien compris votre question. 😊\n\nVous pouvez me demander des informations sur :\n• 📅 La date et le lieu de l'événement\n• 📋 Le programme de la soirée\n• ✅ Comment confirmer votre présence\n• 🏢 Les opportunités d'investissement\n• 🏘️ Loft & Keys Properties\n• 💰 Les rendements et la rentabilité\n• 🚗 Le parking et les infos pratiques\n\nN'hésitez pas à reformuler votre question !",
        en: "I'm sorry, I didn't quite understand your question. 😊\n\nYou can ask me about:\n• 📅 Event date and location\n• 📋 Evening program\n• ✅ How to confirm your attendance\n• 🏢 Investment opportunities\n• 🏘️ Loft & Keys Properties\n• 💰 Returns and profitability\n• 🚗 Parking and practical info\n\nFeel free to rephrase your question!"
    };
    
    return defaultMessages[currentLang] || defaultMessages.fr;
}

// Envoyer un message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;
    
    // Ajouter le message de l'utilisateur
    addMessage(message, true);
    chatbotInput.value = '';
    
    // Simuler un délai de réponse
    setTimeout(() => {
        const response = findResponse(message);
        addMessage(response, false);
    }, 500);
}

// Event listeners
chatbotSend.addEventListener('click', sendMessage);

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Questions rapides
document.querySelectorAll('.quick-question').forEach(button => {
    button.addEventListener('click', () => {
        const question = button.getAttribute('data-question');
        addMessage(question, true);
        
        setTimeout(() => {
            const response = findResponse(question);
            addMessage(response, false);
        }, 500);
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c Loft & Keys Properties ', 'background: #0d3d3d; color: #d4a556; font-size: 20px; padding: 10px;');
console.log('%c Soirée Exclusive d\'Opportunité - 27 Nov. 2025 ', 'background: #d4a556; color: #0d3d3d; font-size: 14px; padding: 5px;');
