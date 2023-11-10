<<<<<<< HEAD
let s =   "()))(("


// Output: 3
// Explanation: Lucy needs to add an opening parenthesis at the beginning,
// an opening parenthesis before the second closing parenthesis, and a closing parenthesis at the end.
// This transforms the input string "())" into the valid string "(())"
var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for (let c of s) {
        if (c === '(') open++;
        else if (c === ')' && open > 0) {
            open--;
        } else {
            close++;
        }
    }
    
    return open + close;
};
=======
let s =   "()))(("


// Output: 3
// Explanation: Lucy needs to add an opening parenthesis at the beginning,
// an opening parenthesis before the second closing parenthesis, and a closing parenthesis at the end.
// This transforms the input string "())" into the valid string "(())"
var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for (let c of s) {
        if (c === '(') open++;
        else if (c === ')' && open > 0) {
            open--;
        } else {
            close++;
        }
    }
    
    return open + close;
};
>>>>>>> c0ce6e30774cfc365fe918aba0de970c381cb48c
console.log(minAddToMakeValid(s))