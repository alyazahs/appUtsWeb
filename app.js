function initializeLoginForm() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        errorMessage.textContent = '';

        if (email === '' || password === '') {
            errorMessage.textContent = 'Please enter both email and password.';
            return;
        }

        if (email !== "alyazahs13@gmail.com") {
            errorMessage.textContent = 'Incorrect email. Please enter a valid email.';
            return;
        }

        if (password !== "alyazah") {
            errorMessage.textContent = 'Incorrect password. Please enter the correct password.';
            return;
        }

        window.location.href = 'order.html';
    });
}
document.addEventListener('DOMContentLoaded', function () {
    initializeLoginForm();

    const quantityButtons = document.querySelectorAll('.quantity-button');

    quantityButtons.forEach(button => {
        button.addEventListener('click', function () {
            const input = this.parentElement.querySelector('input[type="number"]');
            let value = parseInt(input.value);

            if (this.classList.contains('plus')) {
                value++;
            } else if (this.classList.contains('minus')) {
                value = Math.max(0, value - 1);
            }

            input.value = value;

            updateTotalPrice();
        });
    });

    function updateTotalPrice() {
        const items = document.querySelectorAll('.order-item');
        let totalPrice = 0;

        items.forEach(item => {
            const priceElement = item.querySelector('.item-price');
            const quantityInput = item.querySelector('input[type="number"]');
            const price = parseFloat(priceElement.textContent.replace('Rp ', '').replace('.', '')); 
            const quantity = parseInt(quantityInput.value);
            totalPrice += price * quantity;
        });

        const totalPriceElement = document.querySelector('.total-price');
        totalPriceElement.textContent = formatPrice(totalPrice);
    }

    function formatPrice(price) {
        return 'Rp ' + price.toLocaleString('id-ID'); 
    }
});
