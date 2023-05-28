//your code here
function calculateTotalPrice() {
  const prices = document.querySelectorAll('[data-ns-test="prices"]');
  let totalPrice = 0;

  prices.forEach((price) => {
    totalPrice += parseFloat(price.textContent);
  });

  const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');

  // Remove existing total price row
  const existingTotalRow = grandTotalElement.parentNode.parentNode;
  if (existingTotalRow.tagName === 'TR') {
    existingTotalRow.parentNode.removeChild(existingTotalRow);
  }

  // Create new total price row
  const newRow = document.createElement('tr');
  const itemNameCell = document.createElement('td');
  itemNameCell.textContent = 'Total Price:';
  const totalPriceCell = document.createElement('td');
  totalPriceCell.textContent = totalPrice.toFixed(2);
  newRow.appendChild(itemNameCell);
  newRow.appendChild(totalPriceCell);

  // Append new row to table
  const tfootElement = document.querySelector('tfoot');
  tfootElement.appendChild(newRow);
}

calculateTotalPrice();
