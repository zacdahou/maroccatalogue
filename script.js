// Somadir Homepage Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to grid items
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        // Add keyboard navigation support
        item.setAttribute('tabindex', '0');
        
        // Click handler
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            handleSectionClick(section);
        });
        
        // Keyboard support
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                handleSectionClick(section);
            }
        });
        
        // Add ripple effect on click
        item.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
    
    // Logo click handler
    const logo = document.querySelector('.logo-icon');
    logo.addEventListener('click', function() {
        // Add a little bounce animation
        this.style.animation = 'bounce 0.6s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

function handleSectionClick(section) {
    // Add visual feedback
    const clickedItem = document.querySelector(`[data-section="${section}"]`);
    clickedItem.classList.add('clicked');
    
    setTimeout(() => {
        clickedItem.classList.remove('clicked');
    }, 200);
    
    // Handle navigation based on section
    switch(section) {
        case 'produits':
            console.log('Navigating to Produits section');
            // Here you would typically navigate to the products page
            // window.location.href = '/produits';
            showNotification('Section Produits - Fonctionnalité à venir');
            break;
        case 'recettes':
            console.log('Navigating to Recettes section');
            // window.location.href = '/recettes';
            showNotification('Section Recettes - Fonctionnalité à venir');
            break;
        case 'calculateur':
            console.log('Navigating to Calculateur section');
            // window.location.href = '/calculateur';
            showNotification('Calculateur - Fonctionnalité à venir');
            break;
        case 'agences':
            console.log('Navigating to Agences section');
            // window.location.href = '/agences';
            showNotification('Section Agences - Fonctionnalité à venir');
            break;
        case 'contact':
            console.log('Navigating to Contact section');
            // window.location.href = '/contact';
            showNotification('Section Contact - Fonctionnalité à venir');
            break;
        default:
            console.log('Unknown section:', section);
    }
}

function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(246, 139, 31, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #F68B1F, #ff9a3d);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(246, 139, 31, 0.3);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: rotate(-5deg) translateY(0);
        }
        40% {
            transform: rotate(-5deg) translateY(-10px);
        }
        60% {
            transform: rotate(-5deg) translateY(-5px);
        }
    }
    
    .grid-item.clicked {
        transform: translateY(-4px) scale(0.95);
    }
`;
document.head.appendChild(style);