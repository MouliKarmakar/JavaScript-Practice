function margeArray(arr1,arr2){
    let newArr=[];
    let i=0;
    let j=0;
    while(i<arr1.length &&j<arr1.length){
        let ch1=arr1[i];
        let ch2=arr2[j];
        if(ch1<=ch2){
            newArr.push(ch1);
            i++;
        }
        else if(ch2<ch1){
            newArr.push(ch2);
            j++;
        }
    }
    if(arr1.length<arr2.length){
        while(i<arr1.length){
            newArr.push(arr1[i]);
            i++;
        }
    }
    else{
        while(j<arr2.length){
            newArr.push(arr2[j]);
            j++;
        }
    }
    return newArr;
}

let a=[1,2,3,4,5];
let b=[1,7,8,9];
console.log(margeArray(a,b));