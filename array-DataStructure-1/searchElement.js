function isElementPresent(arr,element){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===element){
            return true;
        }
    }
    return false;
}

let arr=[12,11,23,34,56,40];
let element=100;
console.log(isElementPresent(arr,element)); 