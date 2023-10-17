const wordsDict = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];

// Input: wordsDict, "apple", "fig"
// Output: 3




// Input: wordsDict, "coding", "makes"
// Output: 1


function sortestDistance(wordsDict, word1, word2){
    let minDist=Infinity;
    for(let i=0;i<wordsDict.length;i++){
        for(let j=0;j<wordsDict.length;j++){
            if(i!==j){
                if((wordsDict[i]===word1)&&(wordsDict[j]===word2)){
                    let n=Math.abs(i-j);
                    if(n<minDist){
                        minDist=n;
                    }
                }
            }
        }
    }
    return minDist;
}
// const words = ["practice", "makes", "perfect", "coding", "makes"];
console.log(sortestDistance(wordsDict, "apple", "fig"));