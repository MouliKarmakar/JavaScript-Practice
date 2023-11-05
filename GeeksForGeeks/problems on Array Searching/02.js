// Check for majority elements in a sorted array.
// Input-1 
arr=[1,2,3,3,3,3,10]; 
let x=3;
console.log(isSuchElement(arr,x));
// Output: true {x appears more than n/2 times in the given array where n is the length of the array}

function isSuchElement(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            count++;
        }
    }
    if(count>=(arr.length/2)){
        return true;
    }
    return false;
}