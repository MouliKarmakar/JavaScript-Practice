let arr=[1,4,3,9,10,3,4,6,5];
let n=arr.length;
console.log(selectionSort(arr,n));

function selectionSort(arr,n){
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        swap(arr,min,i);
    }
    return arr;
}
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}