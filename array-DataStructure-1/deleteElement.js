function deleteElement(arr,indexAt){
   for(let i=indexAt;i<arr.length-1;i++){
    arr[i]=arr[i+1];
   } 
   arr.length=arr.length-1;
   return arr;
}


let arr=[12,11,23,34,56,40];
let indexAt=2;
console.log(deleteElement(arr,indexAt));