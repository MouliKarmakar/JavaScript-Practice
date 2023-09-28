function isprime(n){
let sqrt=Math.sqrt(n);
for(let i=2;i<=sqrt;i++){
  if(n%i==0){
    return false;
  }
}
return true;
}
console.log(isprime(43));