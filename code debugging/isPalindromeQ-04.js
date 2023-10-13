// Input: "RaceCar"
// Output: true
// Input: "Hello"
// Output: false
function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("RaceCar"));