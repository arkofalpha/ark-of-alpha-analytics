// Import products array
const products = require('../../data/products.js');

// Initialize catalog when DOM is loaded
document.addEventListener('DOMContentLoaded', initCatalog);

function initCatalog() {
    const container = document.getElementById('whatsapp-catalog');
    if (!container) return;

    // Create header if it doesn't exist
    if (!container.querySelector('h2')) {
        container.innerHTML = `
            <h2>Our Products</h2>
            <div class="product-grid"></div>
        `;
    }

    const grid = container.querySelector('.product-grid');
    
    // Render product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="assets/img/products/${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.desc}</p>
            <strong>$${product.price}</strong>
            <a 
                class="btn-whatsapp"
                href="https://wa.me/15551234567?text=Show%20me%20${encodeURIComponent(product.title)}"
                target="_blank"
            >View on WhatsApp</a>
        `;
        grid.appendChild(card);
    });
}