// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
var shuffle = function(nums, n) {
    let arr1=[];
    let arr2=[];
    let newArr=[];
    for(let i=0;i<n;i++){
        arr1.push(nums[i]);
    }
    for(let j=n;j<2*n;j++){
        arr2.push(nums[j]);
    }
    for(let k=0;k<arr1.length;k++){
        newArr.push(arr1[k]);
        newArr.push(arr2[k]);
    }
    return newArr;
};

let  nums = [2,5,1,3,4,7];
let  n = 3;
console.log(shuffle(nums,n));