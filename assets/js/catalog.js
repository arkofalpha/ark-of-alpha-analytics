// Import products array
import { products } from '../../data/products.js';

// Initialize catalog when DOM is loaded
document.addEventListener('DOMContentLoaded', initCatalog);

function initCatalog() {
    const container = document.getElementById('whatsapp-catalog');
    if (!container) return;

    // Add section header
    container.innerHTML = `
        <div class="section-header text-center">
            <h2>Our Analytics Solutions</h2>
            <p class="text-light mb-5">Explore our comprehensive suite of data analytics tools and services designed to transform your business intelligence. From interactive dashboards to AI-powered solutions, we have everything you need to make data-driven decisions.</p>
        </div>
        <div class="product-grid"></div>
    `;

    const grid = container.querySelector('.product-grid');
    if (!grid) return;
    
    // Render product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';        card.innerHTML = `
            <img src="assets/img/products/${product.image.replace('.png', '.jpg')}" alt="${product.title}" class="product-image">
            <div class="content-wrapper">
                <div>                    <h3>${product.title}</h3>
                    <p>${product.desc}</p>
                    <strong>KES ${product.price.toLocaleString()}</strong>
                </div>
                <a 
                    class="btn-whatsapp"
                href="https://wa.me/+254769821222?text=I'm%20interested%20in%20${encodeURIComponent(product.title)}"
                target="_blank"
                rel="noopener noreferrer"
            >                    Inquire on WhatsApp
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}