function evenArraySum(n, arr){
    let sum=0;
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            sum=sum+arr[i];
        }
    }
    console.log(sum);
}
let arr=[1,2,3,4,5];
evenArraySum(5,arr)