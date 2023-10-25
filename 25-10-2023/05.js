// Index of a String in an Array
let arr=["AlmaBetter","Newton Class","Edureka","Unacademy"];
let index = "Edureka";
function findIndex(arr, str) {
    // Your code goes here
    for(let i=0;i<arr.length;i++){
        if(arr[i]==str){
            return (i);
        }
    }
    return (-1);
 }
 console.log(findIndex(arr,index));