function reverseArrayTraversal(n, arr){
    let str="";
    for(let i=arr.length-1;i>=0;i--){
        str=str+arr[i]+" ";
    }
    console.log(str);
}
let arr=[1,2,3,4,5];
reverseArrayTraversal(5,arr)