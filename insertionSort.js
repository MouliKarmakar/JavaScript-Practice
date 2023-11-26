let arr=[1,4,3,9,10,3,4,6,5];
let n=arr.length;
console.log(insertionSort(arr,n));

function insertionSort(arr,n){
    for(let i=1;i<n;i++){
        let current=arr[i];
        let previousIndex=i-1;
        while(previousIndex>=0 && arr[previousIndex]>current){
            arr[previousIndex+1]=arr[previousIndex];
            previousIndex--;
        }
        arr[previousIndex+1]=current;
    }
    return arr;
}