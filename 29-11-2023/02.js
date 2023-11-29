var containsDuplicate = function(nums) {
    // Your code goes here
    let obj={};
    for(let i of nums){
        if(!obj[i]){
            obj[i]=1;
        }
        else{
            obj[i]++;
        }
    }
    for(let j in obj){
        if(obj[j]>1){
            return true;
        }
    }
    return false;
};
let nums = [1,2,3,1];
console.log(containsDuplicate(nums));