// Input: 60.75, 0.25
// Output: 75.94
// Input: 90.00, 0.10
// Output: 99
function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}
console.log(calculateTip(90.00,0.10));