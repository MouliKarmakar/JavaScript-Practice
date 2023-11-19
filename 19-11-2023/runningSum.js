var runningSum = function(nums) {
    let newArr=[];
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        newArr.push(sum);
    }
    return newArr;
};
let nums = [1,2,3,4];
console.log(runningSum(nums));