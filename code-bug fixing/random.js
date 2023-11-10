<<<<<<< HEAD
var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i <nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, (hashmap.get(num)||0)+1);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i < maxValue + 1; i++) {
        if (!hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
};
=======
var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i <nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, (hashmap.get(num)||0)+1);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i < maxValue + 1; i++) {
        if (!hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
};
>>>>>>> c0ce6e30774cfc365fe918aba0de970c381cb48c
console.log(findErrorNums([3, 2, 3, 4, 5]));