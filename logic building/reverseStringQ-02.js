// Input: "JavaScript"
// Output: "tpircSavaJ"
// Input: "AlmaBetter University"
// Output: "ytisrevinU retteBamlA"

function reverseString(str){
    let result = '';
    for(let i=str.length-1;i>=0;i--){
        result += str[i];
    }
    return result;
}
console.log(reverseString("AlmaBetter University"));
