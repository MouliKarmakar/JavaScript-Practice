// Input: "Coding is fun with fellow learners"
// Output: 8
// Input: "The quick brown fox jumped over the lazy dog"
// Output: 6
function findLongestWord(sentence) {
    // Write your code here
const words = sentence.split(' ');
let maxLength = 0;

for (let word of words) {
    const length = word.length;
    if (length > maxLength) {
        maxLength = length;
    }
}

return maxLength;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
