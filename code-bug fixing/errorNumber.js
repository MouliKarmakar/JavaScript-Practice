<<<<<<< HEAD
var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) {
            output.push(num); // Store the first duplicate number in the output array.
        } else {
            hashmap.set(num, (hashmap.get(num) || 0) + 1); // Count the occurrences of each number.
        }
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= maxValue; i++) {
        if (!hashmap.has(i)) {
            output.push(i); // Store the missing number in the output array.
            break; // Stop searching after finding the missing number.
        }
    }

    return output;
};

// Test case
console.log(findErrorNums([3, 2, 3, 4, 5]));  // Output: [8, 9]


// Output: [2, 3]
=======
var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) {
            output.push(num); // Store the first duplicate number in the output array.
        } else {
            hashmap.set(num, (hashmap.get(num) || 0) + 1); // Count the occurrences of each number.
        }
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= maxValue; i++) {
        if (!hashmap.has(i)) {
            output.push(i); // Store the missing number in the output array.
            break; // Stop searching after finding the missing number.
        }
    }

    return output;
};

// Test case
console.log(findErrorNums([3, 2, 3, 4, 5]));  // Output: [8, 9]


// Output: [2, 3]
>>>>>>> c0ce6e30774cfc365fe918aba0de970c381cb48c
// Explanation: The duplicated number is 2, and the missing number is 3.