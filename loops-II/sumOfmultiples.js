let n=3; //target number
let k=10; //k multiples of n
let y=5; //divisable by y or not;
let sum=0;
    for(let i=1;i<=k;i++){
        if((n*i)%y==0){
            sum=sum+(n*i);
        }
    }
    console.log(sum);