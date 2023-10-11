function equalTo42(size,arr) {
    let count=0;
    for(let i=0;i<size;i++){
        if(arr[i]===42){
            count++;
        }
    }
    if(count>0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

let arr=[1,2,3,4,5];
let n=arr.length;
equalTo42(n,arr);