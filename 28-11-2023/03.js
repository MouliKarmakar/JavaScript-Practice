function binarySearch(arr, k){
    // Your code goes here
    for(let i=0;i<arr.length;i++){
        if(arr[i]===k){
            return i;
        }
    }
    return (-1);
};
let arr = [1, 3, 5, 7, 9]; 
let k = 7;
console.log(binarySearch(arr,k));