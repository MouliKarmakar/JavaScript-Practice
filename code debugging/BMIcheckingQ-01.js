// Input: 65, 1.75
// Output: "Normal weight"
// Input: 45, 1.60
// Output: "Underweight"
function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 || bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 || bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(calculateBMI(66,1.60));