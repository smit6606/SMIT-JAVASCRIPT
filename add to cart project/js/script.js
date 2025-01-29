const products = {
    all: [
        { name: 'OnePlus Nord CE 3', price: 29999, category: 'phones', image: 'image/nord-ce-3.webp' },
        { name: 'OnePlus 13', price: 69999, category: 'phones', image: 'image/one-plus 13.jpg' },
        { name: 'OnePlus Watch 2', price: 15999, category: 'wearables', image: 'image/OnePlus Watch 2.webp' },
        { name: 'OnePlus Buds Z2', price: 5999, category: 'audio', image: 'image/one plus buds z2.png' },
        { name: 'OnePlus Pad 2', price: 44999, category: 'tablet', image: 'image/OnePlus Pad 2.webp' },
        { name: 'OnePlus Case', price: 1999, category: 'protection', image: 'image/one plus 12 case.jpeg' },
        { name: 'OnePlus Cable', price: 999, category: 'cables', image: 'image/cables.webp' },
        { name: 'OnePlus 12 Aramid Fiber Bumper Case Black', price: 2999, category: 'protection', image: 'image/OnePlus 12 Aramid Fiber Bumper Case Black.png' },
        { name: 'OnePlus 12', price: 64999, category: 'phones', image: 'image/Oneplus 12.webp' },
        { name: 'OnePlus 13 Aramid Fiber Magnetic Case', price: 3999, category: 'protection', image: 'image/OnePlus 13 Aramid Fiber Magnetic Case.webp' },
        { name: 'OnePlus 13 Wood Grain Magnetic Half-pack Case', price: 3599, category: 'protection', image: 'image/OnePlus 13 Wood Grain Magnetic Half-pack Case.webp' },
        { name: 'OnePlus 13R', price: 37999, category: 'phones', image: 'image/Oneplus 13R.webp' },
        { name: 'OnePlus AIRVOOC 50W Magnetic Charger White', price: 2999, category: 'cables', image: 'image/OnePlus AIRVOOC 50W Magnetic Charger White.webp' },
        { name: 'OnePlus AIRVOOC 50W Wireless Charger White', price: 2999, category: 'cables', image: 'image/OnePlus AIRVOOC 50W Wireless Charger White.png' },
        { name: 'OnePlus Buds Pro 3', price: 8999, category: 'audio', image: 'image/Oneplus Buds Pro 3.webp' },
        { name: 'OnePlus Nord 4 Sandstone Bumper Case', price: 2999, category: 'protection', image: 'image/OnePlus Nord 4 Sandstone Bumper Case.webp' },
        { name: 'OnePlus Nord 4', price: 34999, category: 'phones', image: 'image/Oneplus nord 4.png' },
        { name: 'OnePlus Nord Buds 3', price: 3999, category: 'audio', image: 'image/OnePlus Nord Buds 3.webp' },
        { name: 'OnePlus Nord Wired Earphones (3.5mm)', price: 1299, category: 'audio', image: 'image/OnePlus Nord Wired Earphones (3.5mm).png' },
        { name: 'OnePlus Open', price: 59999, category: 'phones', image: 'image/Oneplus open.webp' },
        { name: 'OnePlus Pad Go', price: 29999, category: 'tablet', image: 'image/OnePlus Pad Go.webp' },
        { name: 'OnePlus SUPERVOOC 80W Power Adapter', price: 1999, category: 'cables', image: 'image/OnePlus SUPERVOOC 80W Power Adapter.webp' },
        { name: 'OnePlus Watch 2R', price: 17999, category: 'wearables', image: 'image/OnePlus Watch 2R.webp' },
        { name: 'OnePlus Nord CE 4', price: 34999, category: 'phones', image: 'image/OnePlus Nord CE4.webp' }
    ]
};


let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleView(section) {
    const sections = ['all', 'phones', 'wearables', 'audio', 'tablet', 'protection', 'cables'];
    sections.forEach(s => {
        const productSection = document.getElementById(s + '-section');
        if (productSection) productSection.classList.add('d-none');
    });

    if (section === 'cart') {
        document.getElementById('cart-section').classList.remove('d-none');
        document.getElementById('products').classList.add('d-none');
    } else {
        document.getElementById('products').classList.remove('d-none');
        document.getElementById('cart-section').classList.add('d-none');
    }
    renderProducts(section);
}

function renderProducts(category) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';

    const filteredProducts = products.all.filter(product => category === 'all' || product.category === category);
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-4', 'mb-4');
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="card-body">
                    <h5>${product.name}</h5>
                    <p>₹${product.price}</p>
                    <button class="btn btn-red" onclick="addToCart('${product.name}')">Add to Cart</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

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

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartItemsContainer.appendChild(cartRow);
    });

    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = totalPrice;
}

function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    if (cart[index].quantity === 0) {
        removeFromCart(index);
    } else {
        saveCart();
        renderCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function proceedToPayments() {
    if (cart.length === 0) {
        alert("You need to have at least one item in the cart to proceed to payments.");
    } else {
        alert("Proceeding to payments!");
    }
}

showSection('all');
updateCartCount();