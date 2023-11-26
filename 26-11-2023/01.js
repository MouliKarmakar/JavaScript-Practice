function PrimeMover(num) {
    // Your code goes here
    let count=0;
    for(let i=1;i<10000;i++){
         let c=0;
         for(let j=1;j<=i;j++){
             if(i%j==0){
                 c++;
             }
         }
         if(c==2){
             count++;
             if(count==num){
                 return i;
             }
         }
    }
 }
 let num=9;
 console.log(PrimeMover(num));