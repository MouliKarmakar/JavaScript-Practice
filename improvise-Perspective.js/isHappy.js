let n = 7;
console.log(isHappy(n));
// Output: true
// Explanation:
//     7^2 = 49
//     4^2 + 9^2 = 16 + 81 = 97
//     9^2 + 7^2 = 81 + 49 = 130
//     1^2 + 3^2 + 0^2 = 1 + 9 + 0 = 10
//     1^2 + 0^2 = 1
//     The process ends with 1, so 7 is a happy number.
function isHappy(n) {
    function sumOfsquares(num){
        let sum=0;
        while(num>0){
            let digit=num%10;
            sum=sum+(digit**2);
            num=Math.floor(num/10);
        }
        return sum;
    }
    let mySet=new Set();
    while(n!==1 && !mySet.has(n)){
        mySet.add(n);
        n=sumOfsquares(n);
    }
    return n===1;
}
