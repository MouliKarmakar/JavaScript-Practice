// Input: 9
// Output: [2, 3, 5, 7];
// Input: 20
// Output: [2, 3, 5, 7, 11, 13, 17, 19]

function findPrimes(n){
    let arr = [];
    for(let i=2;i<=n;i++){
        if(i==2){
            arr.push(i);
        }
        else{
            let flag=isPrime(i);
            if(flag){
                arr.push(i);
            }
        }
    }
    return arr;
}
function isPrime(n){
    for(let j=2;j<=Math.sqrt(n);j++){
        if(n%j==0){
            return false;
        }
    }
    return true;
}

console.log(findPrimes(9));