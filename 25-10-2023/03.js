// Treasure Quest
arr = [10, 20, 30, 40];
function sumArray(arr) {
	// Your code goes here
    let sum=0;
    for(let num of arr){
        sum=sum+num;
    }
    return sum;
}
console.log(sumArray(arr)); 