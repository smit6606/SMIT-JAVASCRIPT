const products = {
    all: []
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Load products from localStorage
function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products.all = JSON.parse(savedProducts);
        renderProducts('all');
    }
}

// Show products and tabs sections, and hide the form
function showProducts() {
    document.getElementById('product-form').classList.add('d-none');
    document.getElementById('tabs').classList.remove('d-none');
    document.getElementById('products').classList.remove('d-none');
    document.getElementById('cartsection').classList.add('d-none');
    renderProducts('all');
}

// Show the form and hide other sections
function showForm() {
    document.getElementById('product-form').classList.remove('d-none');
    document.getElementById('tabs').classList.add('d-none');
    document.getElementById('products').classList.add('d-none');
    document.getElementById('cartsection').classList.add('d-none');
}

// Attach event listener to show form icon
document.getElementById('show-form-icon').addEventListener('click', function (e) {
    e.preventDefault();
    showForm();
});

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products.all));
}

// Show/hide RAM input based on category
document.getElementById('category').addEventListener('change', function () {
    const ramInput = document.getElementById('ram-input');
    if (this.value === 'phones' || this.value === 'tablet') {
        ramInput.classList.remove('d-none');
    } else {
        ramInput.classList.add('d-none');
    }
});

// Add product from form
document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const companyName = document.getElementById('company-name').value;
    const modelName = document.getElementById('model-name').value;
    const price = parseFloat(document.getElementById('price').value);
    const imageUrl = document.getElementById('image-url').value;
    const category = document.getElementById('category').value;
    const ram = document.getElementById('ram').value;

    if (!companyName || !modelName || !price || !imageUrl || !category) {
        alert("Please fill all required fields.");
        return;
    }

    if ((category === 'phones' || category === 'tablet') && !ram) {
        alert("Please enter RAM size.");
        return;
    }

    const productName = category === 'phones' || category === 'tablet' ?
        `${companyName} ${modelName} (${ram}GB RAM)` : `${companyName} ${modelName}`;

    const newProduct = {
        name: productName,
        price: price,
        category: category,
        image: imageUrl
    };

    products.all.push(newProduct);
    saveProducts();
    renderProducts('all');
    this.reset();
});

// Render products
function renderProducts(category) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';

    const filteredProducts = products.all.filter(product => category === 'all' || product.category === category);
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}" class="card-img-top">
                <div class="card-body">
                    <h5>${product.name}</h5>
                    <p>₹${product.price}</p>
                    <button class="btn btn-red" onclick="addToCart('${product.name}')">Add to Cart</button>
                    <button class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

// Edit product
function editProduct(index) {
    const product = products.all[index];
    document.getElementById('company-name').value = product.name.split(' ')[0];
    document.getElementById('model-name').value = product.name.split(' ')[1];
    document.getElementById('price').value = product.price;
    document.getElementById('category').value = product.category;
    if (product.category === 'phones' || product.category === 'tablet') {
        document.getElementById('ram').value = product.name.split('(')[1].split('GB')[0];
        document.getElementById('ram-input').classList.remove('d-none');
    }
    products.all.splice(index, 1);
    saveProducts();
    renderProducts('all');
    showForm();
}

// Delete product
function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.all.splice(index, 1);
        saveProducts();
        renderProducts('all');
    }
}

// Add to cart
function addToCart(productName) {
    const product = products.all.find(p => p.name === productName);
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Render cart
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        const cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartItemsContainer.appendChild(cartRow);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Update quantity
function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    if (cart[index].quantity === 0) {
        removeFromCart(index);
    } else {
        saveCart();
        renderCart();
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
}

// Clear cart
function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Proceed to payments
function proceedToPayments() {
    if (cart.length === 0) {
        alert("You need to have at least one item in the cart to proceed to payments.");
    } else {
        alert("Proceeding to payments!");
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
    }
}

// Toggle view
function toggleView(section) {
    if (section === 'cart') {
        document.getElementById('cartsection').classList.remove('d-none');
        document.getElementById('products').classList.add('d-none');
        document.getElementById('tabs').classList.add('d-none');
        document.getElementById('product-form').classList.add('d-none');
        renderCart();
    } else {
        document.getElementById('products').classList.remove('d-none');
        document.getElementById('cartsection').classList.add('d-none');
        document.getElementById('tabs').classList.remove('d-none');
        document.getElementById('product-form').classList.add('d-none');
        renderProducts(section);
    }
}

// Load products and cart on page load
loadProducts();
updateCartCount();