function isPalindrome(num) {
    // Your code goes here
    /*
    let str=num.toString();
    let rev="";
    for(let i=str.length-1;i>=0;i--){
      rev=rev+str[i];
    }
    if(str===rev){
      return "wins";
    }
    else{
      return "loses";
    }
    */
  
    let str=num.toString();
    let rev=str.split('').reverse().join('');
    if(str===rev){
      return "wins";
    }
    else{
      return "loses";
    }
  }

  let num=331;
  console.log(isPalindrome(num));