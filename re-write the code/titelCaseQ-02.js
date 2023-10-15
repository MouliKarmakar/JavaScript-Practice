// Input: "Dream big, work hard, and stay focused"
// Output: "Dream Big, Work Hard, And Stay Focused"
// Input: "Be yourself; everyone else is already taken."
// Output: "Be Yourself; Everyone Else Is Already Taken."
function titleCase(sentence) {
    // write your code here
const words = sentence.toLowerCase().split(' ');
let newArr=words.map(function(word){
    return word[0].toUpperCase()+word.substring(1);
})
return newArr.join(' ');
}

console.log(titleCase("Dream big, work hard, and stay focused"))