function detectPalindrome(num){
    let str=num.toString();
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    let reverse=parseInt(rev);
    if(num==reverse){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
    }

    let num=1221;
    detectPalindrome(num);