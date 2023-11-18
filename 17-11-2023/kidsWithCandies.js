var kidsWithCandies = function(candies, extraCandies) {
    let arr=[];
    for(let i=0;i<candies.length;i++){
        let candy=candies[i]+extraCandies;
        arr.push(istrue(candy,candies));
    }
    return arr;
};
function istrue(candy,arr){
    for(let i=0;i<arr.length;i++){
        if(candy<arr[i]){
            return false;
        }
    }
    return true;
}
let candies = [2,3,5,1,3];
let extraCandies = 3;
console.log(kidsWithCandies(candies,extraCandies));