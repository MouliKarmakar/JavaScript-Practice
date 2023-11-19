var smallerNumbersThanCurrent = function(nums) {
    let newArr=[];
    for(let i=0;i<nums.length;i++){
        let count=0;
        for(let j=0;j<nums.length;j++){
            if(i!=j){
                if(nums[j]<nums[i]){
                    count++;
                }
            }
        }
        newArr.push(count);
    }
    return newArr;
};
let nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));