Input: "Full Stack Web Development"
Output: "Full St7ack Web7 Develo7pment"
Input: "Hello World and Universe!"
Output: "Hello W7orld an7d Unive7rse!"

function insert7(inputString){
    let res="";
    let count=0;
    for(let i=0;i<inputString.length;i++){
        if(inputString[i]!==" "){
            count++;
        }
        res=res+inputString[i];
        if(count==6){
            res=res+'7';
            count=0;
        }
    }
    return res;
}
console.log(insert7("Hello World and Universe!"));
