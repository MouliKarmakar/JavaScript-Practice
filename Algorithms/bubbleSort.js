let arr=[1,4,3,9,10,3,4,6,5];
let n=arr.length;
console.log(bubbleSort(arr,n));

function bubbleSort(arr,n){
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
 return arr;
}