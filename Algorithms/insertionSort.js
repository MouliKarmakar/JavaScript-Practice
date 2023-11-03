let arr=[1,4,3,9,10,3,4,6,5];
let n=arr.length;
console.log(insertionSort(arr,n));

function insertionSort(arr,n){
    for(let i=1;i<n;i++){
        let current=arr[i];
        let lastIndex=i-1;
        while(lastIndex>=0 && arr[lastIndex]>current){
            arr[lastIndex+1]=arr[lastIndex];
            lastIndex--;
        }
        arr[lastIndex+1]=current;
    }
    return arr;
}