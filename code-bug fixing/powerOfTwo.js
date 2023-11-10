<<<<<<< HEAD
let n = 9;
console.log(isPowerOfTwo(n));
// Output: true
// Explanation: Since 16 can be expressed as 2^4, the function returns True,
// indicating that 16 is indeed a power of two.
function isPowerOfTwo(n) {
    
    return n > 0 && (n & (n - 1)) === 0;
=======
let n = 9;
console.log(isPowerOfTwo(n));
// Output: true
// Explanation: Since 16 can be expressed as 2^4, the function returns True,
// indicating that 16 is indeed a power of two.
function isPowerOfTwo(n) {
    
    return n > 0 && (n & (n - 1)) === 0;
>>>>>>> c0ce6e30774cfc365fe918aba0de970c381cb48c
}