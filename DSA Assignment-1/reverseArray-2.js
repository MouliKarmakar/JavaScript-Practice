function reverse(arr){
    let n=arr.length/2;
    for(let i=0;i<n;i++){
        let temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
}
let a=[1,2,3,4,5];
reverse(a);
console.log(a);