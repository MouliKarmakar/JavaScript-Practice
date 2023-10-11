function smallestAndLargestOfAll(n, arr){
    let max=arr[0];
    for(let i=1;i<n;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    let min=max;
    for(let i=0;i<n;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log(min);
    console.log(max);
}

let arr=[1,2,3,,4,,5];
let n=arr.length;
smallestAndLargestOfAll(n, arr)