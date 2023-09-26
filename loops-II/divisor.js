let left=13;
let right=24;
let k=3;
let count=0;
    let i=left;
    while(i<=right){
        if(i%k==0){
            count++;
        }
        i++;
    }
    console.log(count);