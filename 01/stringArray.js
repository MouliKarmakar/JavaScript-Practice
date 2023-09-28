let arr=["AlmaBetter","Newton Class","Edureka","Unacademy"]; 
let str="Edureka";
console.log(findIndex(arr,str));
function findIndex(arr,str){
for(let i=0;i<arr.length;i++){
    if(arr[i]==str){
        return (i);
    }
}
return (-1);
}
