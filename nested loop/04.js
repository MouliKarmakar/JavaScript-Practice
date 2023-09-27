let num=4;
let sum=0;
    for(let i=1;i<=num;i++){
        for(let j=1;j<=i;j++){
            if(j%2==0){
                sum=sum+j;
            }
        }
        console.log(sum);
        sum=0;
    }