function fibonacciSeries(n) {
    // Your code goes here
    let arr=[0,1];
    for(let i=2;i<n;i++){
      let m=arr.length;
      let sum=arr[m-1]+arr[m-2];
      arr.push(sum);
    }
    for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
    }
  }
  let n=10;
  console.log(fibonacciSeries(n));