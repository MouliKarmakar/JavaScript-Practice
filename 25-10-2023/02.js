// Jack's Prime Number Dilemma
function isPrime(n) {
    // Your code goes here
    let sqrt=Math.sqrt(n);
    for(let i=2;i<=sqrt;i++){
      if(n%i==0){
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(5));