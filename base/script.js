document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.product-checkbox');
    const totalPriceElement = document.getElementById('total-price');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', calculateTotal);
    });

    function calculateTotal() {
        let total = 0;

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                const product = checkbox.closest('.product');
                const price = parseFloat(product.getAttribute('data-price'));
                total += price;
            }
        });

        totalPriceElement.textContent = total;
    }
});
