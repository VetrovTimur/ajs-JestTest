export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => total + (item.count * item.price), 0);

  if (applyDiscount) {
    return sum * 0.5;
  }

  return sum;
}
