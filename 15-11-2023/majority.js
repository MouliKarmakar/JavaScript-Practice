const majorityElement = function(nums){
    let len=(nums.length/2);
    let obj={};
    for(let i=0;i<nums.length;i++){
        let ch=nums[i];
        if(!obj[ch]){
            obj[ch]=1;
        }
        else{
            obj[ch]++;
        }
    }
    let max=0;
    let element=0;
    for(let key in obj){
        if(obj[key]>=len){
            if(max<obj[key]){
                max=obj[key];
                element=key;
            }
        }
    }
    return element;
};
let nums = [3,2,3];
console.log(majorityElement(nums));