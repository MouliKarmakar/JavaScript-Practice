var finalValueAfterOperations = function(operations) {
    let x=0;
    for(let i=0;i<operations.length;i++){
        let op=operations[i];
        switch(op){
            case "--X":
            x=x-1;
            break;
            case "X--":
            x=x-1;
            break;
            case "++X":
            x=x+1;
            break;
            case "X++":
            x=x+1;
            break;
        }
    }
    return x;
};
let operations = ["--X","X++","X++"];
console.log(finalValueAfterOperations(operations))