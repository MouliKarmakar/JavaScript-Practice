function exponentialSearch(arr,target){
    let n=arr.length;
    if(arr[0]===target){
        return 0;
    }
    let i=1;
    while(i<n && arr[i]<=target){
        if(arr[i]===target){
            return i;
        }
        i=i*2;
    }
    let left=Math.floor(i/2);
    let right=Math.min(i,n-1);
    while(left<=right){
        let mid=(left+right)/2;
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return -1;
}
let arr=[1,3,5,6,8,9];
console.log(exponentialSearch(arr,7));