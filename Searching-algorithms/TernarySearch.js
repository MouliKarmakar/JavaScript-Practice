function ternarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let divisor=Math.floor((end-start)/3);
        let mid1=start+divisor;
        let mid2=end-divisor;

        if(arr[mid1]===target){
            return mid1;
        }
        if(arr[mid2]===target){
            return mid2;
        }
        if(arr[mid1]>target){
            end=mid1-1;
        }
        else if(arr[mid2]<target){
            start=mid2+1;
        }
        else{
            start=mid1+1;
            end=mid2-1;
        }
    }
    return -1;
}
let arr=[5,6,7,8,9];
console.log(ternarySearch(arr,8));