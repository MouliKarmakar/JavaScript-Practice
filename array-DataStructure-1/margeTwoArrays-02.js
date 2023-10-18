let arr1=[2,4,6,7,10,12,14];
let arr2=[1,5,20,34];

function margeTwoArray02(arr1,arr2){
    let newArr=[];
    let i=0;
    let j=0;
    let k=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            newArr[k]=arr1[i];
            i++;
        }
        else{
            newArr[k]=arr2[j];
            j++;
        }
        k++;
    }
    if(arr1.length>arr2.length){
        while(i<arr1.length){
            newArr[k]=arr1[i];
            i++;
            k++;
        }
    }
    else{
        while(j<arr2.length){
            newArr[k]=arr2[j];
            j++;
            k++;
        }
    }
    return newArr;
}

console.log(margeTwoArray02(arr1,arr2));