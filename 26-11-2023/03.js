function factorial(n) {
    // Your code goes here
    // let fac=1;
    if(n==0||n==1){
      return 1;
    }
    else{
      return n*factorial(n-1);
    }
  }
  let N = 5;
  console.log(factorial(N));