function checkNumber(num) {
    // Your code goes here
    if(num==0){
      return "Zero";
    }
    else if(num<0){
      return "Negative";
    }
    else if(num>0){
      return "Positive";
    }
  }

console.log(checkNumber(-1));