// Majority element
// Input
let arr=[3,3,4,2,4,4,2,2,4,4];
console.log(suchElement(arr));
// Output: 4 {4 appears more than n/2 times in the given array where n is the length of the array}

function suchElement(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]++;
        }
    }
    for(let key in obj){
        if(obj[key]>=(arr.length/2)){
            return key;
        }
    }
}


