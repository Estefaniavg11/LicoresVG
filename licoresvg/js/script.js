document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartCount = document.getElementById('cart-count');

    function updateCart() {
        let itemCount = 0;

        cartItems.forEach(item => {
            itemCount += item.quantity;
        });

        cartCount.textContent = itemCount;
    }

    function addToCart(id, name, price, quantity) {
        const existingItem = cartItems.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartItems.push({ id, name, price, quantity });
        }
        updateCart();
    }

    document.querySelectorAll('.cart-button').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product');
            const id = parseInt(product.getAttribute('data-id'));
            const name = product.getAttribute('data-name');
            const price = parseInt(product.getAttribute('data-price'));
            const quantity = parseInt(product.querySelector('.quantity').value);

            addToCart(id, name, price, quantity);
        });
    });
});
