function reverseNumber(num){
  // Your code goes here
  let str=num.toString();
  let rev="";
  for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i];
  }
  return rev;
}
let num=987654321;
console.log(reverseNumber(num));