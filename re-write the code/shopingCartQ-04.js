const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
  ];
console.log(calculateTotal(cart1));
//   Input: cart1
//   Output: 2200
//   Explanation: price * quantity of all products = 1000 + 2 * 500 + 4 * 50 = 2200

function calculateTotal(cart) {
    const totalPrice = cart.reduce(function (acc, cur) {
      return acc + cur.price * cur.quantity;
    }, 0);
  
    return totalPrice;
  }
  