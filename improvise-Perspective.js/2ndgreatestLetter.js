function nextGreatestLetter(letters, target) {
    let mySet=new Set(letters);
    let ch=target;
    while(true){
        if(ch>'z'){
            ch='a';
        }
        if(mySet.has(ch)){
            return ch;
        }
        ch=String.fromCharCode(ch.charCodeAt(0)+1);
    }
    return letters[0];
}

// Example usage:
const letters =  ["x","x","y","y"];
const target = 'z';
const result = nextGreatestLetter(letters, target);
console.log(result); // Output: 'c'
