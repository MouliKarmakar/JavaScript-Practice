// Input: "hello world", "l"
// Output: 3
// Input: "Elephant", "E"
// Output: 1
function countOccurrences(str, char) {
    // Write your code here
    let arr=str.split('');
    let ouccurrences=arr.filter((x)=>x===char);
    return ouccurrences.length;
}
console.log(countOccurrences("hello world", "l"));
