// Find common element in three sorted array.
// 	Input-1
let ar1=[1,5,10,20,40,80]
let ar2=[6,7,20,80,100]
let ar3=[3,4,15,20,30,70,80,120]
console.log(commonElement(ar1,ar2,ar3));
// Output: 20,80;
function commonElement(arr1,arr2,arr3){
    let newArr=[];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}
