var findKthPositive = function(arr, k) {
    // Your code goes here
    let missing=[];
    for(let i=1;i<=1100;i++){
        if(!arr.includes(i)){
            missing.push(i);
        }
    }
    return missing[k-1];
};
let arr = [2,3,4,7,11];
let k = 5;
console.log(findKthPositive(arr,k));