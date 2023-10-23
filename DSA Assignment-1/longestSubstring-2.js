// Longest palindrome substring within a string.

let str="abbbracecarstorrst";
console.log(palindromicSubstring(str));

function palindromicSubstring(str){
    let maxLength=0;
    let ans="";
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            let subStr=str.substring(i,j);
            let flag=ispalindrome(subStr);
            if(flag==true && subStr.length>maxLength){
                maxLength=subStr.length;
                ans=subStr;
            }
        }
    }
    return `The longest Palindromic substring is "${ans}" and it's length is ${maxLength}`;
}
function ispalindrome(s){
    let reverse="";
    for(let i=s.length-1;i>=0;i--){
        reverse=reverse+s[i];
    }
    if(s===reverse){
        return true;
    }
    else{
        return false;
    }
}
