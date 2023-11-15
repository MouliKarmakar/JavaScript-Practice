// Explanation:
// The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].
const plusOne = function(digits){
    let num=parseInt(digits.join(""));
    return (num+1).toString().split("").map(Number);
};
let digits = [1,2,3];
console.log(plusOne(digits));

