function oddArray(n, arr){
    for(let i=0;i<n;i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
let arr=[1,2,3,4,5];
oddArray(5,arr);