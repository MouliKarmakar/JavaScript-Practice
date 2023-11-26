let arr=[2,4,5,6,7,8,9,12];
let target=7;
console.log(jumpSearch(arr,target));

function jumpSearch(arr,target){
   let n=arr.length;
   let prev=0;
   let step=Math.floor(Math.sqrt(n));

   while(arr[Math.min(step,n)-1]<target){
    prev=step;
    step=step+Math.floor(Math.sqrt(n));
     if(prev>=n){
        return -1;
     }
   }

   while(arr[prev]<target){
    prev++;
    if(prev==Math.min(step,n)){
        return -1;
    }
   }
   if(arr[prev]==target){
    return prev;
   }
   return -1;
}