let str="ankush";
let N=str.length;
printCharReverse(N,str);

function 
printCharReverse(N,str) {
    for(let i=str.length-1;i>=0;i--){
        console.log(str[i]);
    }

}