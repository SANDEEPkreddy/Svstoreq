// Menu Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const searchBtn = document.getElementById('search-btn');
    const cartBtn = document.getElementById('cart-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle menu visibility on mobile
    menuBtn.addEventListener('click', function() {
        // Show login/register options when menu is clicked
        showAuthOptions();
    });
    
    // Search button functionality
    searchBtn.addEventListener('click', function() {
        const searchTerm = prompt('What are you looking for?');
        if (searchTerm) {
            alert('Searching for: ' + searchTerm);
            // TODO: Implement actual search functionality
        }
    });
    
    // Cart button functionality
    cartBtn.addEventListener('click', function() {
        alert('Cart functionality coming soon!');
        // TODO: Implement cart functionality
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        
        if (event.target === loginModal) {
            closeLoginModal();
        }
        if (event.target === registerModal) {
            closeRegisterModal();
        }
    });
});

// Show authentication options
function showAuthOptions() {
    // Create a simple alert or you can create a custom dropdown
    const choice = confirm('Please choose an option:\n\nClick OK for Login\nClick Cancel for Register');
    
    if (choice) {
        openLoginModal();
    } else {
        openRegisterModal();
    }
}

// Open Login Modal
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Login Modal
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Open Register Modal
function openRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Register Modal
function closeRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Form validation
function validateForm(formType) {
    if (formType === 'register') {
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return false;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long!');
            return false;
        }
    }
    
    return true;
}

// Add smooth scrolling for anchor links
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

// Add loading animation to buttons
function addLoadingAnimation(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    // Remove loading state after 2 seconds (you can adjust this)
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Enhanced menu button with dropdown (alternative approach)
function createDropdownMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu';
    dropdown.innerHTML = `
        <a href="#" onclick="openLoginModal()">Login</a>
        <a href="#" onclick="openRegisterModal()">Register</a>
    `;
    
    // Add dropdown styles
    const style = document.createElement('style');
    style.textContent = `
        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            padding: 0.5rem 0;
            min-width: 150px;
            display: none;
        }
        .dropdown-menu a {
            display: block;
            padding: 0.75rem 1rem;
            color: #333;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .dropdown-menu a:hover {
            background-color: #f8f9fa;
        }
    `;
    document.head.appendChild(style);
    
    menuBtn.style.position = 'relative';
    menuBtn.appendChild(dropdown);
    
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
    });
}

// Initialize dropdown menu (uncomment to use dropdown instead of alert)
// createDropdownMenu();

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add to cart functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-add-cart')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
        
        // Show success message
        showNotification(`${productName} added to cart!`);
    }
});

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
