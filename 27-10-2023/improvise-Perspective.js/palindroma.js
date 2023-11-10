let n=1213;
console.log(isPalindrome(n));
function isPalindrome(n){
let arr=n.toString().split('');
let start=0;
let end=arr.length-1;

while(start<end && end>start){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
if(arr.join('')==n.toString()){
    return true;
}
return false;
}