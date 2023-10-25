// Sorting Fruits for Royal Chef
let fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];
function printFruitsByFrequency(fruits) {
    // your code goes here
    let obj={};
    for(let fruit of fruits ){
      if(!obj[fruit]){
        obj[fruit]=1;
      }
      else{
        obj[fruit]++;
      }
    }
   let arr=Object.values(obj);
   arr.sort().reverse();
  // return arr;
   let newArr=[];
  for(let i=0;i<arr.length;i++){
    let K=getKeyByValue(obj,(arr[i]));
    newArr.push(K);
  }
  return newArr;
  };
  function getKeyByValue(object, valueToFind) {
    const keys = Object.keys(object);
    // const key = keys.find(key => object[key] === valueToFind);
    for(let key of keys){
      if(object[key]===valueToFind){
        return key;
      }
    } 
  }
  console.log(printFruitsByFrequency(fruits));
  