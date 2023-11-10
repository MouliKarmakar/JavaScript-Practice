 function moveZeroes(nums) {
    let zeroes=nums.filter((x)=>x===0);
    let newArr=[]; 
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
           newArr.push(nums[i]); 
        }
    }
    return newArr.concat(zeroes);
};

console.log(moveZeroes([0,1,0,3,12]));