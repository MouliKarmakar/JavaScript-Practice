function findMax(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        let ch=arr[i];
        if(ch>max){
            max=ch;
        }
    }
    return max;
}
console.log(findMax([2,3,6,1,5,9,12]));