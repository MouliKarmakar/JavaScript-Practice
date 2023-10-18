// this function can performs on un shorted arrays and we also get an unsorted new array as an output.

function margeTwoArrays01(arr1){
    let newArr=[];
    for(let i=0;i<arr1.length;i++){
        newArr[i]=arr1[i];
    }
    for(let i=0;i<arr2.length;i++){
        newArr[arr1.length+i]=arr2[i];
    }
    return newArr;
}

let arr1=[11,7,5,10,12,6];
let arr2=[20,15,4,7];
console.log(margeTwoArrays01(arr1,arr2));