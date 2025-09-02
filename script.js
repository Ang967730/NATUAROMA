// Product data
const productData = {
    arroz: {
        name: "Jabón de Arroz",
        price: 48.00,
        description: "Exfoliante suave con propiedades nutritivas que ayuda a aclarar y suavizar la piel naturalmente. Rico en vitaminas y minerales.",
        benefits: [
            "Exfoliación suave y natural",
            "Propiedades iluminadoras",
            "Rico en vitaminas B y E",
            "Ayuda a aclarar manchas",
            "Textura cremosa y suave"
        ],
        ingredients: "Aceite de coco, aceite de oliva, hidróxido de sodio, harina de arroz, agua destilada, aceite esencial de limón.",
        usage: "Humedece la piel, aplica el jabón con movimientos circulares suaves, deja actuar 1-2 minutos y enjuaga con agua tibia. Usa 2-3 veces por semana para mejores resultados.",
        class: "arroz"
    },
    avena: {
        name: "Jabón de Avena",
        price: 42.00,
        description: "Exfoliante suave, ideal para pieles sensibles y delicadas. Remueve células muertas sin irritar la piel.",
        benefits: [
            "Exfoliación delicada",
            "Calma irritaciones",
            "Hidrata profundamente",
            "Apto para pieles sensibles",
            "Propiedades antiinflamatorias"
        ],
        ingredients: "Aceite de coco, manteca de karité, avena coloidal, miel natural, aceite de almendras dulces, agua destilada.",
        usage: "Aplica sobre piel húmeda con masajes circulares muy suaves. Ideal para uso diario. Evita el área de los ojos.",
        class: "avena"
    },
    miel: {
        name: "Jabón de Miel",
        price: 52.00,
        description: "Hidratante natural con propiedades antibacterianas y suavizantes. Ideal para pieles secas y sensibles.",
        benefits: [
            "Hidratación profunda",
            "Propiedades antibacterianas",
            "Nutre la piel",
            "Acelera la cicatrización",
            "Antioxidante natural"
        ],
        ingredients: "Miel pura de abeja, aceite de oliva, aceite de coco, manteca de cacao, propóleo, cera de abeja.",
        usage: "Aplica sobre piel húmeda, deja actuar unos minutos para que la miel penetre, luego enjuaga. Perfecto para uso nocturno.",
        class: "miel"
    },
    carbon: {
        name: "Jabón de Carbón Activado",
        price: 55.00,
        description: "Purificante y detox, perfecto para pieles grasas y mixtas. Absorbe impurezas y controla la grasa.",
        benefits: [
            "Purifica profundamente",
            "Absorbe impurezas",
            "Controla la grasa",
            "Minimiza poros",
            "Efecto detox"
        ],
        ingredients: "Carbón activado de bambú, aceite de árbol de té, arcilla bentonítica, aceite de coco, aceite de ricino.",
        usage: "Usa 2-3 veces por semana sobre piel húmeda. Masajea suavemente y deja actuar 2-3 minutos antes de enjuagar. Evita el uso excesivo.",
        class: "carbon"
    },
    arcillas: {
        name: "Jabón de Arcillas",
        price: 58.00,
        description: "Purificante profundo con arcillas naturales. Ideal para limpiar poros y equilibrar la piel grasa.",
        benefits: [
            "Limpieza profunda de poros",
            "Equilibra la piel grasa",
            "Rica en minerales",
            "Efecto matificante",
            "Mejora la textura de la piel"
        ],
        ingredients: "Arcilla verde francesa, arcilla blanca, aceite de jojoba, aceite esencial de romero, agua de rosas.",
        usage: "Aplica sobre rostro húmedo evitando el contorno de ojos. Deja secar 5-10 minutos hasta formar una mascarilla ligera, luego enjuaga con agua tibia.",
        class: "arcillas"
    },
    hierbas: {
        name: "Jabón de Hierbas Secas",
        price: 46.00,
        description: "Aromático y relajante con mezcla de hierbas naturales. Propiedades calmantes y antioxidantes.",
        benefits: [
            "Aroma relajante natural",
            "Propiedades antioxidantes",
            "Calma la piel irritada",
            "Mejora la circulación",
            "Efecto aromaterápico"
        ],
        ingredients: "Lavanda seca, manzanilla, romero, tomillo, aceite esencial de eucalipto, aceite de oliva virgen.",
        usage: "Perfecto para uso nocturno o después del ejercicio. Aplica con masajes suaves para liberar los aromas. Ideal para relajación.",
        class: "hierbas"
    },
    aceites: {
        name: "Jabón de Aceites Vegetales",
        price: 50.00,
        description: "Hidratación profunda con aceites vegetales naturales. Aromas y colores únicos en cada pieza artesanal.",
        benefits: [
            "Hidratación intensa",
            "Nutrición profunda",
            "Colores naturales únicos",
            "Aromas personalizados",
            "Textura cremosa"
        ],
        ingredients: "Aceite de aguacate, aceite de argán, aceite de rosa mosqueta, manteca de murumuru, colorantes naturales.",
        usage: "Aplica generosamente sobre piel húmeda. Su fórmula rica es ideal para pieles muy secas. Cada pieza tiene aromas y colores únicos.",
        class: "aceites"
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeScrollEffects();
    initializeFormHandling();
    initializeProductInteractions();
    initializePageSpecific();
    initializeProductModal();
    initializeCartSidebar();
    hideLoadingScreen();
});

// Navigation Functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            
            const spans = hamburger?.querySelectorAll('span');
            if (spans) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }
            
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Animation Initialization
function initializeAnimations() {
    if (!('IntersectionObserver' in window)) {
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => el.classList.add('animated'));
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                if (entry.target.classList.contains('products-grid') || 
                    entry.target.classList.contains('benefits-grid') ||
                    entry.target.classList.contains('features-grid') ||
                    entry.target.classList.contains('ingredients-grid')) {
                    animateGridItems(entry.target);
                }
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.product-card, .benefit-card, .feature-card, .ingredient-card, .about-content, .contact-content, .section-header, .animate-on-scroll');
    elementsToAnimate.forEach(el => {
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }
        observer.observe(el);
    });
}

// Grid Animation
function animateGridItems(grid) {
    const items = grid.querySelectorAll('.product-card, .benefit-card, .feature-card, .ingredient-card');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        
        const soaps = document.querySelectorAll('.soap');
        soaps.forEach((soap, index) => {
            const speed = 0.02 + (index * 0.01);
            soap.style.transform = `translateY(${Math.sin(scrolled * speed) * 10}px) rotate(${scrolled * speed * 2}deg)`;
        });
    });
}

// Form Handling
function initializeFormHandling() {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }
    
    const newsletterForm = document.querySelector('#newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleNewsletterForm(this);
        });
    }
    
    const generalForm = document.querySelector('.contact-form form');
    if (generalForm && !generalForm.id) {
        generalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleGeneralContactForm(this);
        });
    }
    
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Handle Contact Form
function handleContactForm(form) {
    const nombre = form.querySelector('#nombre')?.value || '';
    const apellido = form.querySelector('#apellido')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const mensaje = form.querySelector('#mensaje')?.value || '';
    const politicas = form.querySelector('#politicas')?.checked || false;
    
    if (!nombre || !apellido || !email || !mensaje) {
        showNotification('Por favor completa todos los campos obligatorios', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Por favor ingresa un email válido', 'error');
        return;
    }
    
    if (!politicas) {
        showNotification('Debes aceptar las políticas de privacidad', 'error');
        return;
    }
    
    submitForm(form, '¡Mensaje enviado correctamente! Te contactaremos pronto.');
}

// Handle Newsletter Form
function handleNewsletterForm(form) {
    const email = form.querySelector('input[type="email"]')?.value || '';
    
    if (!isValidEmail(email)) {
        showNotification('Por favor ingresa un email válido', 'error');
        return;
    }
    
    const submitBtn = form.querySelector('button');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Suscrito!';
        showNotification('¡Te has suscrito exitosamente!', 'success');
        form.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
}

// Handle General Contact Form
function handleGeneralContactForm(form) {
    const name = form.querySelector('input[type="text"]')?.value || '';
    const email = form.querySelector('input[type="email"]')?.value || '';
    const message = form.querySelector('textarea')?.value || '';
    
    if (!name || !email || !message) {
        showNotification('Por favor completa todos los campos', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Por favor ingresa un email válido', 'error');
        return;
    }
    
    submitForm(form, '¡Mensaje enviado correctamente! Te contactaremos pronto.');
}

// Submit Form Helper
function submitForm(form, successMessage) {
    const submitBtn = form.querySelector('.btn-submit, button[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
        showNotification(successMessage, 'success');
        
        form.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 2000);
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Product Interactions
function initializeProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    const addToCartBtns = document.querySelectorAll('.btn-product');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product');
            if (productId && productData[productId]) {
                openProductModal(productId);
            }
        });
    });
}

// Product Modal System
function initializeProductModal() {
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalAddToCart = document.getElementById('modalAddToCart');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProductModal);
    }
    
    if (modalAddToCart) {
        modalAddToCart.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            if (productId) {
                addToCart(productId);
                closeProductModal();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
}

// Open Product Modal
function openProductModal(productId) {
    const product = productData[productId];
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalBenefitsList = document.getElementById('modalBenefitsList');
    const modalIngredients = document.getElementById('modalIngredients');
    const modalUsage = document.getElementById('modalUsage');
    const modalPrice = document.getElementById('modalPrice');
    const modalSoapVisual = document.getElementById('modalSoapVisual');
    const modalAddToCart = document.getElementById('modalAddToCart');
    
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalDescription) modalDescription.textContent = product.description;
    if (modalIngredients) modalIngredients.textContent = product.ingredients;
    if (modalUsage) modalUsage.textContent = product.usage;
    if (modalPrice) modalPrice.textContent = `$${product.price.toFixed(2)}`;
    
    if (modalSoapVisual) {
        modalSoapVisual.className = `modal-soap-visual ${product.class}`;
    }
    
    if (modalBenefitsList) {
        modalBenefitsList.innerHTML = '';
        product.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            modalBenefitsList.appendChild(li);
        });
    }
    
    if (modalAddToCart) {
        modalAddToCart.setAttribute('data-product', productId);
    }
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close Product Modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Cart System
function initializeCartSidebar() {
    const cartToggle = document.getElementById('cartToggle');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.getElementById('cartClose');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartToggle) {
        cartToggle.addEventListener('click', toggleCartSidebar);
    }
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCartSidebar);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (!this.disabled) {
                showNotification('¡Gracias! Procesando tu pedido...', 'success');
            }
        });
    }
    
    updateCartDisplay();
}

// Toggle Cart Sidebar
function toggleCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('active');
        if (cartSidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close Cart Sidebar
function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Add to Cart
function addToCart(productId) {
    const product = productData[productId];
    if (!product) return;
    
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('natuaroma_cart') || '[]');
    } catch (e) {
        cart = [];
    }
    
    const cartItem = {
        id: Date.now(),
        productId: productId,
        name: product.name,
        price: product.price,
        class: product.class
    };
    
    cart.push(cartItem);
    
    try {
        localStorage.setItem('natuaroma_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('No se pudo guardar en localStorage');
    }
    
    updateCartDisplay();
    showNotification(`${product.name} agregado al carrito`, 'success');
    
    setTimeout(() => {
        toggleCartSidebar();
    }, 500);
}

// Remove from Cart
function removeFromCart(itemId) {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('natuaroma_cart') || '[]');
    } catch (e) {
        cart = [];
    }
    
    cart = cart.filter(item => item.id !== itemId);
    
    try {
        localStorage.setItem('natuaroma_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('No se pudo guardar en localStorage');
    }
    
    updateCartDisplay();
    showNotification('Producto eliminado del carrito', 'info');
}

// Update Cart Display
function updateCartDisplay() {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('natuaroma_cart') || '[]');
    } catch (e) {
        cart = [];
    }
    
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.classList.toggle('hidden', cart.length === 0);
    }
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">No hay productos en el carrito</p>';
        } else {
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image ${item.class}"></div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
        }
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = total.toFixed(2);
    }
    
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Page-specific functionality
function initializePageSpecific() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'productos.html':
            initializeProductFilters();
            break;
        case 'contacto.html':
            initializeFAQ();
            break;
    }
}

// Product Filters
function initializeProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card[data-category]');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// FAQ Functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Smooth scroll function for buttons
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Loading Screen
function hideLoadingScreen() {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('fade-out');
            setTimeout(() => {
                if (loading.parentNode) {
                    loading.remove();
                }
            }, 500);
        }, 1000);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const modal = document.getElementById('productModal');
        const cartSidebar = document.getElementById('cartSidebar');
        
        if (navMenu?.classList.contains('active')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
        
        if (modal?.classList.contains('active')) {
            closeProductModal();
        }
        
        if (cartSidebar?.classList.contains('active')) {
            closeCartSidebar();
        }
        
        const activeFAQ = document.querySelector('.faq-item.active');
        if (activeFAQ) {
            activeFAQ.classList.remove('active');
        }
    }
});

// Resize Handler
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    }
}, 250));

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
        const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
        const href = link.getAttribute('href');
        
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes floatToCart {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -150%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(200%, -200%) scale(0.5);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .focused {
        transform: translateY(-2px);
    }
    
    .nav-menu a.active::after {
        width: 100%;
    }
    
    .cart-item {
        animation: slideInCart 0.3s ease-out;
    }
    
    @keyframes slideInCart {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .product-modal.active .modal-content {
        animation: modalSlideIn 0.3s ease-out;
    }
    
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: scale(0.9) translateY(50px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    .cart-sidebar.active {
        animation: slideInFromRight 0.3s ease-out;
    }
    
    @keyframes slideInFromRight {
        from {
            right: -400px;
        }
        to {
            right: 0;
        }
    }
    
    @media (max-width: 768px) {
        .cart-sidebar.active {
            animation: slideInFromRight 0.3s ease-out;
        }
        
        @keyframes slideInFromRight {
            from {
                right: -100vw;
            }
            to {
                right: 0;
            }
        }
    }
`;

// Append styles to document
document.head.appendChild(style);

// Window functions for global access
window.removeFromCart = removeFromCart;
window.scrollToSection = scrollToSection;

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('NATUAROMA website loaded successfully!');
    });
} else {
    console.log('NATUAROMA website loaded successfully!');
}
