<<<<<<< HEAD
var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();
    for(let i=0; i<length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};
let names = ["Mary","John","Emma"];
let  heights = [180,165,170]
=======
var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();
    for(let i=0; i<length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};
let names = ["Mary","John","Emma"];
let  heights = [180,165,170]
>>>>>>> c0ce6e30774cfc365fe918aba0de970c381cb48c
console.log(sortPeople(names, heights)) ;