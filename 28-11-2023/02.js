function findSubarray(arr, sum) {
    // Your code goes here
    for(let i=0;i<arr.length-1;i++){
      for(let j=i+1;j<=arr.length;j++){
        let subArray=arr.slice(i,j);
        let sumation=add(subArray);
        if(sum==sumation){
          return subArray;
        }
      }
    }
  }
  
  function add(arr){
    sum=0;
    for(let i=0;i<arr.length;i++){
      sum=sum+arr[i];
    }
    return sum;
  }
  let arr = [1,2,3,7,5];
  let sum = 12;
  console.log(findSubarray(arr,sum));