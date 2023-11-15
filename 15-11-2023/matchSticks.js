const makesquare = function(matchsticks){
    const sum = matchsticks.reduce((a, b) => a + b);
    if (sum % 4 !== 0) return false;
    const side = sum / 4;
    matchsticks.sort((a, b) => b - a);
    const sides = [0, 0, 0, 0];
    const backTrack = (index) => {
        if (index === matchsticks.length) {
            return sides.every(side => side === side);
        }
        for (let i = 0; i < 4; i++) {
            if (sides[i] + matchsticks[index] <= side) {
                sides[i] += matchsticks[index];
                if (backTrack(index + 1)) return true;
                sides[i] -= matchsticks[index];
            }
        }
        return false;
    }
    return backTrack(0);
};
let matchsticks = [1,1,2,2,2];
console.log(makesquare(matchsticks));