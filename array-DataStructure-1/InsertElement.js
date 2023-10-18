function insertElement(arr,indexAt,element){
    for(let i=arr.length-1;i>=indexAt;i--){
        arr[i+1]=arr[i];
    }
    arr[indexAt]=element;
    return arr;
} 

let arr=[12,11,23,34,56,40];
let indexAt=4;
let element=200;
console.log(insertElement(arr,indexAt,element));