var countPairs = function(nums, target) {
    let count=0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            let sum=nums[i]+nums[j];
            if(sum<target){
                count++;
            }
        }
    }
    return count;
};
let nums = [-1,1,2,3,1];
let target = 2;
console.log(countPairs(nums,target));