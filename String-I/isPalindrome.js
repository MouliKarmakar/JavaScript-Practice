let str="ankush";
let N=str.length;
checkPalindrome(N,str);

function checkPalindrome(N, str) {
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    if(str===rev){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}