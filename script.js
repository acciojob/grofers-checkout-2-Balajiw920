//your code here
function calculateTotalPrice() {
  const prices = document.querySelectorAll('[data-ns-test="prices"]');
  let totalPrice = 0;

  prices.forEach((price) => {
    totalPrice += parseFloat(price.textContent);
  });

  const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotalElement.textContent = totalPrice.toFixed(2);
}

calculateTotalPrice();
