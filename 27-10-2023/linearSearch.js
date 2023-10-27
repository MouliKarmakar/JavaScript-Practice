function linearSearch (arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

let arr = [4, 6 ,7 ,8 ,2, 9, 0];
let target = 2;
console.log(linearSearch(arr,target));
