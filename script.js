// Sample product data
const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        image: 'images/product1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        image: 'images/product2.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        image: 'images/product3.jpg'
    }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add items to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    console.log('Added to cart:', product);
    alert(`${product.name} added to cart!`);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayProducts);
