function printHorizontalArray(N,arr){
    let str="";
    for(let i=0;i<N;i++){
        str=str+arr[i]+" ";
    }
    console.log(str);
  }
  
  let arr=[1,2,3,4,5];
  printHorizontalArray(5,arr);