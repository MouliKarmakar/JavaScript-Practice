let arr=[2,4,5,6,7,8,9,12];
let target=10;
console.log(binarySearch(arr,target));

function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let middle=Math.floor((start+end)/2);
        if(arr[middle]==target){
            return middle;
        }
        else if(arr[middle]<target){
            start=middle+1;
        }
        else{
            end=middle-1;
        }
    }
    return -1;
}