let str="ankush";
let N=str.length;
charAtOddPos(N,str);


function charAtOddPos(N,str) {
    for(let i=0;i<N;i++){
        if(i%2!=0){
            console.log(str[i]);
        }
    }
    
}